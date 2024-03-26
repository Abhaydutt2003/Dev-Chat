const User = require("../Models/User");
const filterObj = require("../utils/filterObj");

const updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    console.log(req.jwtIssueTime - user.passwordChangedAt);
    //TODO handle the case where the jwt was issued later after the change of passoword
    const filteredBody = filterObj(
      req.body,
      "firstName",
      "lastName",
      "avatar",
      "about"
    );
    user.set(filteredBody);
    await user.save();
    return res
      .status(200)
      .json({
        status: "success",
        message: "User profile updated successfully",
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error updating the user profile" });
  }
};

// const updateProfile = async (req, res) => {
//   console.log(req.jwtIssueTime - );
//   const { userId, jwtIssueTime } = req;
//   const user = await User.findById(userId);
//   //check if the password was changed after the JWT issue time
//   // if (user.passwordChangedAt > jwtIssueTime) {
//   //   //redirect the user from here to the login page
//   //   user.refreshToken = undefined;
//   //   return res
//   //     .status(400)
//   //     .json({
//   //       status: "error",
//   //       message: "Password changed, please login again",
//   //     });
//   // }
//   const filteredBody = filterObj(
//     req.body,
//     "firstName",
//     "lastName",
//     "about",
//     "avatar"
//   );
//   await User.findByIdAndUpdate(userId, { filteredBody });
//   return res.status(200).json({
//     status: "success",
//     message: "User information updated successfully",
//   });
// };

module.exports = updateProfile;
