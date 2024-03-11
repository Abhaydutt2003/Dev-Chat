const User = require("../Models/User");
const crypto = require("crypto");

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user)
    res.status(400).json({
      status: "error",
      message: "There is no user with the given email",
    });
  //generate the resetToken and update the user
  const resetToken = crypto.randomBytes(32).toString("hex");
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  user.passwordResetToken = passwordResetToken;
  user.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  user.save();
  //proceed to send the reset link to the user
  const resetUrl = `https://dev-chat.com/auth/resetPassword/?code=${resetToken}`;
  try {
    //TODO send the email to the user

    res.status(200).json({
      status: "success",
      message: "Reset password link sent to the user",
    });
  } catch (error) {
    user.passwordResetExpires = undefined;
    user.passwordResetToken = undefined;
    await user.save({ validateBeforeSave: false });
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
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  //if the token has expired or the submission is out of the time window
  if (!user) {
    res.status(400).json({
      status: "error",
      message: "Token is invalid or has expired",
    });
  }
  //update the user
  const { pwd, pwdConfirm } = req.body;
  user.password = pwd;
  user.passwordConfirm = pwdConfirm;
  user.passwordChangedAt = Date.now();
  user.passwordResetExpires = undefined;
  user.passwordResetToken = undefined;
  await user.save();

  // ** instead of setting the JWT here , redirect the user to the login page, handle in the frontend

  //TODO send email to the user to tell notify about the password reset
  return res.status(200).json({
    status: "success",
    message: "Password reset successfully",
  });
};

module.exports = { forgotPassword, resetPassword };
