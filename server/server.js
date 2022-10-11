const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');

const User = require('./config/user');
const Mail = require('./config/nodemailer')

const app = express();


//connect database
mongoose.connect('mongodb://192.168.3.10:8000/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0'),{
	useNewUrlParser: true,
	useUnifiedTopology: true
},() =>{
	console.log('mongoose is connected')
};

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
	origin: 'http://localhost:3000', // location of the react app
	credentials: true
}))

app.use(session({
	secret: 'secretcode',
	resave: 'true',
	saveUninitialized: true
}));

app.use(cookieParser('secretcode'))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(passport);


//confirmation code computation
const token = uuidv4();
console.log(token)

//routes
app.post('/register', (req,res) => {
	User.findOne({username: req.body.username}, async(err,doc) => {
		if (err) throw err;
		if (doc) res.send('User Already Exists');
		if (!doc) {

			const hashedPassword = await bcrypt.hash(req.body.password,8);

			const newUser = new User({
				username: req.body.username,
				password: hashedPassword,
				confirmationCode: token
			});
			await newUser.save();
			res.send('User created');
		}
	})
	nodemailer.sendConfirmationEmail(
		user.username,
		user.email,
		user.confirmationCode
	);
});

app.post('/login', (req,res, next) => {
	passport.authenticate('local', (err,user,info) =>{
		if (err) throw err;
		if (!user) res.send('No user exists');
		if (user.status != 'Active'){
			return res.status(401).send('Pending account. Please verify your email');
		}
		else{
			req.login((user,err) => {
				if (err) throw err;
				res.send('Successfully authenticated');
				res.send(req.user);
				console.log('req.user');
			})
		}
	})(req,res,next);
});

app.listen(4000, () => {
	console.log('Server has started');
})
