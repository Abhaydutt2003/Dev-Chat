const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res, next) => {
  const { email, pwd } = req.body;
  if (!email || !pwd) {
    return res.status(400).json({
      status: "error",
      message: "Both email and password are required",
    });
  }
  const foundUser = await User.findOne({ email: email }).select("+pwd").exec();
  if (!foundUser)
    return res.status(401).json({ status: "error", message: "User not found" });
  //evlauate the input password
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (!match) {
    return res.status(401).json({ message: "incorrect password" });
  } else {
    //No need to pass the password in the access token
    const accessToken = jwt.sign(
      {
        UserInfo: {
          userId: foundUser._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    return res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      accessToken,
    });
  }
};

module.exports = { handleLogin };
