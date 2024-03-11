const otpGenerator = require("otp-generator");
const User = require("../Models/User");
const bcrypt = require("bcrypt");

const sendOtp = async (req, res, next) => {
  const userId = req.userId;
  const newOtp = otpGenerator(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  const otpExpireTime = Date.now() + 10 * 60 * 1000; //10 mins from now on
  await User.findByIdAndUpdate(userId, {
    otp: newOtp,
    otpExpireTime: otpExpireTime,
  });
  // TODO send Mail
  res.status(200).json({
    status: "success",
    message: "OTP Sent Successfully",
  });
};

//will be used only when the user clicks on the verifyOtp button, rest all times
//the handleLogin controller should work
const verifyOtp = async (req, res, next) => {
  // verify OTP and update user record
  const { email, otp } = req.body;
  const user = await User.findOne({
    email,
    otpExpireTime: { $gt: Date.now() },
  });
  if (!user) {
    res.status(400).json({
      status: "error",
      message: "Email is Invalid or the OTP has expired",
    });
  } else {

    //TODO look into this part , should the user be redirected or logged in from here?

    //validate the OTP
    const match = await bcrypt.compare(otp, user.otp);
    if (!match) {
      res.status(400).json({
        status: "error",
        message: "OTP is incorrect",
      });
    } else {
      user.otp = undefined;
      user.verified = true;
      const accessToken = jwt.sign(
        {
          UserInfo: {
            userId: foundUser._id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60s" }
      );
      //the expiration of the refreshToken determines when the user will have to login again , as once the refreshToken expires, the user cannot get a new accessToken
      const refreshToken = jwt.sign(
        { userId:foundUser._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      //save refreshToken in the foundUser and set the cookie
      foundUser.refreshToken = refreshToken;
      await user.save({ new: true, validateModifiedOnly: true });
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
      });
      return res.status(200).json({
        status: "success",
        message: "OTP verified successfully",
        accessToken,
      });
    }
  }
};

module.exports = { sendOtp, verifyOtp };
