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
    required: [true, "Email is required"],//required specifies that the field is mandatory , and cannot be left empty when a document is created
  },
  password: { 
    type: String,
    select:false
  },
  passwordChangedAt: {
    type: Date,
    default:Date.now()
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
  refreshToken:{
    type:String
  }
});



// //before actully saving , this function will be called
// userSchema.pre('save',async function(next){
//   //run only if the otp is modified
//   if(!this.isModified("otp"))return next();
//   //HASH the otp
//   this.otp = await bcrypt.hash(this.otp,12);
// })



//this approach might be okay for smaller projects i guess
// userSchema.methods.validatePassword = async function (inputPassword,userPassword){
//   return await bcrypt.compare(inputPassword,userPassword);
// }

module.exports =  mongoose.model("User",userSchema);