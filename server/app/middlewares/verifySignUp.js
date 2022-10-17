const db = require('../models');
const User = db.user;

checkDuplicate = (req, res, next) => {
	//Username
	User.findOne({
		username: req.body.username
	}).exec((err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		if (user) {
			res.status(400).send({ message: "Username already taken" });
			return;
		}

		//Email
		User.findOne({
			email: req.body.email
		}).exec((err,user) => {
			if (err) {
				res.status(500).send({message: err});
				return;
			}

			if (user){
				res.status(400).send({ message: 'Email already taken' });
				return;
			}

			next();
		});
	});
};

const verifySignUp = {
	checkDuplicate
};

module.exports = verifySignUp;	
