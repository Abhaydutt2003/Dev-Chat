//TODO RENAME FILE TO registerController

const otpGenerator = require("otp-generator");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const OTP = require("../Models/OTP");
const emailValidator = require("../utils/validateEmail");

const sendOtp = async (req, res) => {
  const userId = req.userId;
  //the newOtp will be sent to the user using a email ,
  //after that we will store the otp using bcypt in the Schema
  const newOtp = otpGenerator(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  //TODO send the newOtp to user via email or messages

  const hashedOtp = await bcrypt.hash(newOtp, 12);
  await OTP.create({
    otp: hashedOtp,
    userId: userId,
  });
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
  const foundOTP = OTP.findOne({ userId: user._id });
  if (!foundOTP)
    return res
      .status(400)
      .json({ status: "error", messsage: "OTP invalid or expired" });
  //validate the OTP
  bcrypt.compare(otp, foundOTP.otp, (err) => {
    if (err) {
      return res
        .status(400)
        .json({ status: "error", message: "OTP is incorrect" });
    } else {
      //** verify the user and on the frontend , redirect the user to login
      user.verified = true;
      return res
        .status(200)
        .json({ status: "success", message: "User verified successfully" });
    }
  });
};

module.exports = verifyOtp;

// HOW THE SEQUENCE OF REGISTRATION WILL WORK

// 1-> USER GOES THROUGH THE REGISTER MIDDLEWARE
// 2-> AFTER THAT A OTP IS GENERATED , THE HASH OF THAT OTP WILL BE STORED IN THE DATABSE IN THE USER SCHEMA
// 3-> THE OTP WILL BE SENT TO THE USER VIA THE EMAIL , OR VIA THE SMS
