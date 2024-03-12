const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const otpSchema = new Schema({
    userId:{
        type:Number
    },
    otp:{
        type:Number,
    },
    "expiresAt":{
        type:Date,
        expires: 10 * 60 * 1000//10 mins from now on
    }
});

//the expiresAt defines when the OTP will actually expire

module.exports = mongoose.model("OTP",otpSchema);