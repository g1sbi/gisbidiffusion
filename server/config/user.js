const mongoose = require('mongoose');
const user = new mongoose.Schema({
	email: String,
	username: String,
	password: String,
	verified: {
		type: Boolean,
		default: false
	},
	confirmationCode: {
		type: String,
		unique: true
	},
});

module.exports = mongoose.model('User',user);
