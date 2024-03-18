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
    "expiresAt":{
        type:Date,
        expires: 10 * 60 * 1000//10 mins from now on
    }
});

//the expiresAt defines when the OTP document will be automatically removed from the db

module.exports = mongoose.model("OTP",otpSchema);