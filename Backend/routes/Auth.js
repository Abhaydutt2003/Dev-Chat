const express = require("express");
const router = express.Router();

const loginController = require("../controllers/authController");

//when the user has the password
router.post("/", loginController);
module.exports = router;
