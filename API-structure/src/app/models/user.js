const mongoose = require("mongoose");
var user = new mongoose.Schema({
    first_name: {type: String, default: ''},
    last_name: {type: String, default: ''},
    email: {type: String, default: ''},
    password: {type: String, default: ''},
    phone_number: {type: String, default: ''},
    otp: {type: String, default: ''}
})

module.exports = mongoose.model('user', user)