const express = require('express');
const router = express.Router();

const registerMiddleware = require('../middlewares/registerMiddleware'); 
const {verifyOtp,sendOtp} = require("../controllers/registerController");

//by defualt the user is sent to this route while registring
router.post('/',registerMiddleware,sendOtp);

//this route should be called only when the user recieves the OTP
router.post('/verify',verifyOtp);
module.exports = router;




//the route to just get an OTP seems sort of a waste , so completly skipped it