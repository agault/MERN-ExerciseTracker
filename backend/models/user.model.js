const mongoose = require('mongoose');//require('mongoose')

const Schema = mongoose.Schema;//all mongoose schema start same. 


const userSchema = new Schema({//username
    username: {//: validations to usernames
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5
    },
},{
    timestamps: true   //auto
    
});

const User = mongoose.model('User', userSchema);//User is just name, and the user schema

module.exports = User;