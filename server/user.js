const mongoose = require('mongoose');
const user = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
	status: {
		type: String,
		enum: ['Pending','Active'],
		default: 'Pending'
	},
	confirmationCode: {
		type: String,
		unique: true
	},
	roles: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Role"
		}
	]
});

module.exports = mongoose.model('User',user);
