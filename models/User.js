const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: 10,
    },
    password: {
        type: String, 
        required: true,
        minLength: 4,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

