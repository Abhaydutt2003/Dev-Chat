const otpGenerator = require("otp-generator");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const OTP = require("../Models/OTP");
const emailValidator = require("../utils/validateEmail");
const {mailOtp} = require('../utils/sendEmail');


const sendOtp = async (req, res) => {
  const userId = req.userId;
  //the newOtp will be sent to the user using a email ,
  //after that we will store the otp using bcypt in the Schema
  const newOtp = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  //console.log(userId);
  const user = await User.findById(userId);
  //console.log(user);
  //send the user the OTP
  await mailOtp(user.firstName,user.email,newOtp);
  const hashedOtp = await bcrypt.hash(newOtp, 12);
  //console.log(typeof hashedOtp);
  //check weather a OTP already exsist with the userId
  let otp = await OTP.findOne({userId:userId});
  if(!otp){
    await OTP.create({
      otp: hashedOtp,
      userId: userId, 
      createdAt:Date.now()
    });
  }
  res.status(200).json({
    status: "success",
    messsage: "OTP sent to provided email",
  });
};

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  if (!emailValidator(email))
    return res.status(400).json({ status: "error", messsage: "Invalid email" });
  const user = await User.findOne({
    email: email,
  });
  if (!user)
    return res
      .status(400)
      .json({ status: "error", messsage: "User does not exist" });
  //find the OTP
  const foundOTP = await OTP.findOne({ userId: user._id });
  if (!foundOTP)
    return res
      .status(400)
      .json({ status: "error", messsage: "OTP invalid or expired" });
  //validate the OTP
  bcrypt.compare(otp, foundOTP.otp, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ status: "error", message: "OTP is incorrect" });
    } else {
      //** verify the user and on the frontend , redirect the user to login
      user.verified = true;
      await user.save();
      return res
        .status(200)
        .json({ status: "success", message: "User verified successfully,redirect to login" });
    }
  });
};

module.exports = {verifyOtp,sendOtp};


