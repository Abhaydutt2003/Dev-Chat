const User = require("../Models/User");
const crypto = require('crypto');

const forgotPassword = async (req,res,next)=>{
    const {email} = req.body;
    const user = await User.findOne({email:email});
    if(!user)res.status(400).json({status:'error',message:"There is no user with the given email"});
    //generate the resetToken and update the user
    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto.createHash('sha256').update(resetToken).digest("hex");
    user.passwordResetToken = passwordResetToken;
    user.passwordResetToken = Date.now() + 10*60*1000;
}



const resetPassword = ()=>{

}


module.exports = {forgotPassword,resetPassword};