const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },

    mobile:{
        type:String,
        required:true
    },

    branch:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    address:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("Student", studentSchema);