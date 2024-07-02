const mongoose = require('mongoose');

const regschema = new mongoose.Schema({
    name1:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
    },  
    phone:{
        type:String,
        // required:true
    },
    birthdate:{
    type:Date,
    // required:false
    },
    gender:{
    type:String,
    // required:true
    },
    address:{
        type:String,
        // required:true
        },
        city:{
            type:String,
            // required:true
            },
    course:{
    type:String,
    // required:true
     },
    pincode:{
    type:Number,
    // required:true
        },
        

})

const Register_course = new mongoose.model('Register_course',regschema);

module.exports = Register_course;