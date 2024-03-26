const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const emailValidator = require("../utils/validateEmail");

const handleLogin = async (req, res, next) => {
  const { email, pwd } = req.body;
  if (!email || !pwd) {
    return res.status(400).json({
      status: "error",
      message: "Both email and password are required",
    });
  }
  //validate the email
  const isValid = emailValidator(email);
  if (!isValid) {
    return res.status(400).json({
      status: "error",
      message: "Please enter a valid email",
    });
  }
  const foundUser = await User.findOne({ email: email })
    .select("+password")
    .exec();
  if (!foundUser) {
    return res.status(401).json({ status: "error", message: "User not found" });
  }
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (!match) {
    return res
      .status(401)
      .json({ status: "error", message: "Incorrect password" });
  }
  const accessToken = jwt.sign(
    {
      UserInfo: {
        userId: foundUser._id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "60s" }
  );
  //the expireTime of the refreshToken determines when the user will have to login again
  const refreshToken = jwt.sign(
    { userId: foundUser._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  foundUser.refreshToken = refreshToken;
  await foundUser.save();
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "none",
    secure: true,
  });
  //TODO SET SECURE : TRUE WHILE USING WITH CHROME
  return res.status(200).json({
    status: "success",
    message: "Logged in successfully",
    accessToken,
  });
};

module.exports = handleLogin;

//User.findOne({expireTime:{$gt Date.now()}});
