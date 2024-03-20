const mongoose = require("mongoose");
//const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const otpSchema = new Schema({
    userId:{
        type:Object,
    },
    otp:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

otpSchema.index({createdAt:1},{expireAfterSeconds:300});


module.exports = mongoose.model("OTP",otpSchema);