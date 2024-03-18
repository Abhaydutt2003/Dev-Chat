const User = require("../Models/User");
const filterObj = require("../utils/filterObj");
const emailValidator = require("../utils/validateEmail");

//next because this is a middleware
const registerMiddleware = async (req, res, next) => {
  const { firstName, lastName, email, pwd } = req.body;
  if (!firstName || !lastName || !email || !pwd) {
    return res.status(400).json({ message: "Please provide all the fields" });
  }
  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "pwd",
    "email"
  );
  //validate the email
  const isValid = emailValidator(email);
  if (!isValid) {
    return res.status(400).json({
      status: "error",
      message: "Please enter a valid email",
    });
  }
  //check if a verified user with the email exists
  const existingUser = await User.findOne({ email: email });
  if (existingUser && existingUser.verified) {
    return res.status(400).json({
      status: "error",
      message: "Email is already in use",
    });
  } else if (existingUser) {
    //email is already there, just update any changed field
    //? CHECK IF THE METHOD BELOW WORKS
    const newUser = await User.findOneAndUpdate({ email: email }, filteredBody, {
      new: true,
      runValidators: true,
    });
    req.userId  = newUser._id;
    next();
  } else {
    //first time
    const newUser = await User.create(filteredBody);
    req.userId  = newUser._id;
    next();
  }
};

module.exports = registerMiddleware;

//this middleware will check weather it is the first time that the user
//is trying to signup to the website or not, ans will process accordingly
