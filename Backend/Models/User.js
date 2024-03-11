const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: function (email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      },
      message: (props) => `Email (${props.value}) is invalid`,
    },
  },
  password: { 
    type: String,
  },
  passwordConfirm: { 
    type: String,
  },
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  verified:{
    type:Boolean,
    default:false,
  },
  otp:{
    type:Number
  },
  otpExpireTime:{
    type:Date
  },
  refreshToken:{
    type:String
  }
});




//before actully saving , this function will be called
userSchema.pre('save',async function(next){
  //run only if the otp is modified
  if(!this.isModified("otp"))return next();
  //HASH the otp
  this.otp = await bcrypt.hash(this.otp,12);
})



//this approach might be okay for smaller projects i guess
// userSchema.methods.validatePassword = async function (inputPassword,userPassword){
//   return await bcrypt.compare(inputPassword,userPassword);
// }

module.exports =  mongoose.model("User",userSchema);