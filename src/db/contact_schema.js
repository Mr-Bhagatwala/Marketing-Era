const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },  
    massage:{
        type:String,
        required:true
    }
})

const Review = new mongoose.model('Review',contact);

module.exports = Review;