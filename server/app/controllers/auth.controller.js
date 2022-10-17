const config = require('../auth.config');
const db = require('../models');
const User = db.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {

	const hashedPassword = bcrypt.hashSync(req.body.password, 8);
	const user = new User({
		username: req.body.username,
		email:  req.body.email,
		password: hashedPassword 
	});

	user.save((err, user) => {
		if (err) {
			res.status(500).send({message: err});
			return;
		}
		res.send({ message: 'User was registered successfully!' });
	});
};

exports.signin = (req, res) => {
	User.findOne({
		username: req.body.username
	})
		.populate('-__v')
		.exec((err, user) => {
			if (err) {
				res.status(500).send({message: err});
				return;
			}

			if (!user){
				return res.status(404).send({message: 'User not found'});
			}

			var validPassword = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!validPassword){
				return res.status(401).send({
					accessToken: null,
					message: 'Invalid password!'
				});
			}

			var token = jwt.sign({id: user.id}, config.secret, {
				expiresIn: 86400
			});

			res.status(200).send({
				id: user._id,
				username: user.username,
				email: user.email,
				accessToken: token
			});
		});
};
