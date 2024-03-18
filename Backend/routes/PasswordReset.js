const express = require("express");
const router = express.Router();

const {
  resetPassword,
  forgotPassword,
} = require("../controllers/passwordController");

//the route to go to when the user clicks on forgot password button
router.post("/", forgotPassword);

//the route the user will go through when the user will click on the mail
router.post("/reset", resetPassword);

module.exports = router;
