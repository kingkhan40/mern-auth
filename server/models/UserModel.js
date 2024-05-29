const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
     username: {
        type: String,
         required: [true , 'Your Name Field is Required']
    },
    email: {
        type: String,
         required: [true , 'Your Email Field is Required']
    },
    password: {
        type: String,
         required: [true , 'Your Password Field is Required']
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
});

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
