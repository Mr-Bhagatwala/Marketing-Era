const mongoose = require('mongoose');

const Registration = new mongoose.Schema({
    name1:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },  
    phonenumber:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
})

const registration = new mongoose.model('registration',Registration);

module.exports = Registration;