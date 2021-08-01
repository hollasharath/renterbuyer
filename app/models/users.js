var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var User = new Schema({
	firstname: { type: String, default: '' },
	lastname: { type: String, default: '' },
	email: { type: String, default: '' },
	city: { type: String, default: '' },
	address: { type: String, default: '' },
	phone: { type: String, default: '' },
	socialnetworks: { type: Object },
}, { timestamps: true })


module.exports = mongoose.model('users', User);

