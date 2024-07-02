const mongoose = require('mongoose');

const connect_Admin = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true
    }
})

const Connect_Admin = new mongoose.model('Connect_Admin',connect_Admin);

module.exports = Connect_Admin;