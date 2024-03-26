const User = require("../Models/User");
const bcrypt = require("bcrypt");
const filterObj = require("../utils/filterObj");
const emailValidator = require("../utils/validateEmail");

const registerMiddleware = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  //check if the user has provided all the feilds
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Please provide all the fields" });
  }
  //check if the email is valid
  const validEmail = emailValidator(email);
  if (!validEmail) {
    return res
      .status(400)
      .json({ status: "error", message: "Please provide a correct email" });
  }
  //check if existing user
  const existingUser = await User.findOne({ email: email });
  if (existingUser && existingUser.verified) {
    return res.status(400).json({
      status: "error",
      message: "Email is already in use",
    });
  } else {
    //hash the password
    const salt = await bcrypt.genSalt(12);
    const hashedPwd = await bcrypt.hash(password, salt);
    req.body.password = hashedPwd;
    const filteredBody = filterObj(
      req.body,
      "firstName",
      "lastName",
      "email",
      "password"
    );
    if (existingUser) {
      filteredBody.passwordChangedAt = Date.now();
      const updatedUser = await User.findOneAndUpdate(
        { email: email },
        filteredBody,
        { new: true }
      );
      req.userId = updatedUser._id;
    } else {
      const newUser = await User.create(filteredBody);
      req.userId = newUser._id;
    }
    next();
  }
};

module.exports = registerMiddleware;

// this middleware will check weather it is the first time that the user
// is trying to signup to the website or not, and will process accordingly

// do not need to check if there are same passwords in the db or not
// passwords will be stored as hash , so very unlikely that the passwords will collide
