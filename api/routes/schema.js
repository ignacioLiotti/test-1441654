const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: String,
    email:{type: String, default: 'holaaadasd'},
});



var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);