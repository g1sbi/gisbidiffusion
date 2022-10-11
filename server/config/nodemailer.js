const nodemailer = require('nodemailer');
const data = require('./mail_login');

const user = data.user;
const pass = data.pass;

const transport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: user,
		pass: pass
	}
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
	console.log("nodemailer check");
	transport.sendMail({
		from: user,
		to: email,
		subject: 'Verify your Gisbi Diffusion account',
		html: '
		<div>
			<h2>Hey, ${name}!</h2>
			<p>Thank you for registering to Gisbi Diffusion. Please, confirm your email address by clicking on the following link.</p>
			<a href='http://localhost:3000/verify/${confirmationCode}'>Click here!</a>
		</div>
		'
	})
		.catch(err => console.log(err));
};
