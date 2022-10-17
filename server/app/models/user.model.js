const mongoose = require('mongoose');

const User = mongoose.model(
	'User',
	new mongoose.Schema({
		username: String,
		email: String,
		password: String,
		confirmationToken: String
	})
);

module.exports = User;
