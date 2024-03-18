//console.log('hello from pwd controller');
const User = require("../Models/User");
const crypto = require("crypto");
const PwdToken = require("../Models/PwdToken.js");
const {mailReset} = require('../utils/sendEmail.js');

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(400).json({
      status: "error",
      message: "There is no user with the given email",
    });
  }
  // handle frequent reset requests
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
  if (user.passwordChangedAt > fiveMinutesAgo) {
    return res.status(400).json({
      status: "error",
      message: `reset request too soon , please try after ${
        user.passwordChangedAt - fiveMinutesAgo
      } mins`,
    });
  }
  //generate the resetToken and update the user
  const resetToken = crypto.randomBytes(32).toString("hex");
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  await PwdToken.create({
    token: passwordResetToken,
    userId: user._id,
  });
  //proceed to send the reset link to the user
  //const resetUrl = `https://dev-chat.com/auth/resetPassword/?code=${resetToken}`;
  const resetUrl = `http://localhost:5173/pwd/reset/?token=${resetToken}`;
  try {
    //TODO send the email to the user
    await mailReset(user.firstName,user.email,resetUrl);
    res.status(200).json({
      status: "success",
      message: "Reset password link sent to the user",
    });
  } catch (error) {
    //email was not sent properly, delete the pwdToken
    PwdToken.deleteOne({ userId: user._id });
    res.status(500).json({
      status: "error",
      message: "Error sending email , please try again",
    });
  }
};

const resetPassword = async (req, res, next) => {
  //get the user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const pwdToken = await PwdToken.findOne({
    token: hashedToken,
  });
  //if the token has expired or the submission is out of the time window
  if (!pwdToken) {
    res.status(400).json({
      status: "error",
      message: "Token is invalid or expired",
    });
  }
  //update the user
  const { pwd } = req.body;
  const user = User.findById(pwdToken.userId);
  user.password = pwd;
  user.passwordChangedAt = Date.now();
  await user.save();

  // ** instead of setting the JWT here , redirect the user to the login page, handle in the frontend

  //TODO send email to the user to tell notify about the password reset
  return res.status(200).json({
    status: "success",
    message: "Password reset successfully",
  });
};

module.exports = { forgotPassword, resetPassword };
