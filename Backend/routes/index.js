//export all the routes from here
const verfiyJwt = require("../middlewares/VerifyJwt");
const pwdRouter = require("./PasswordReset");
const registerRouter = require("./Register");
const userRouter = require("./UpdateUser");
const authRouter = require('./Auth');
const rickRouter = require('./NeverGonna');

const router = require("express").Router();

//use all the routes here , prevents a mess in the main code
router.use("/auth", authRouter);
router.use("/register", registerRouter);
router.use("/pwd", pwdRouter);
router.use("/rickRoll", rickRouter);
//all the routes from below are protected
router.use(verfiyJwt);
router.use("/user", userRouter);

module.exports = router
