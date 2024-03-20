const express = require("express");
const router = express.Router();

const loginController = require("../controllers/authController");
const refreshController = require('../controllers/refreshTokenController');
const logoutController = require('../controllers/logoutController');

//when the user has the password
router.post("/", loginController);
router.get('/refresh',refreshController);
router.get('/logout',logoutController);
module.exports = router;
