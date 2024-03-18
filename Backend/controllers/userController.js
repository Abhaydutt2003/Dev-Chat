



const User = require("../Models/User");
const filterObj = require("../utils/filterObj");

const updateProfile = async (req, res) => {
  const { userId, jwtIssueTime } = req;
  const user = await User.findById(userId);
  //check if the password was changed after the JWT issue time
  if (user.passwordChangedAt > jwtIssueTime) {
    //redirect the user from here to the login page
    user.refreshToken = undefined;
    return res
      .status(400)
      .json({
        status: "error",
        message: "Password changed, please login again",
      });
  }
  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "about",
    "avatar"
  );
  await user.updateMany(filteredBody);
  return res
    .status(200)
    .json({
      status: "success",
      message: "User information updated successfully",
    });
};

module.exports = updateProfile;
