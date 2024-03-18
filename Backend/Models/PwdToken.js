const mongoose = require('mongoose');
//const bcrypt = require('bcrpyt');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId:{
        type:Number
    },
    token:{
        type:String,
    },
    "expiresAt":{
        type:Date,
        expires: 10 * 60 * 1000//10 mins from now on
    }
});

module.exports = mongoose.model("pwdToken",tokenSchema);



