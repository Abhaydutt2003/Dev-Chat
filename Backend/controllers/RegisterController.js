const User = require('../Models/User');
const filterObj = require('../utils/filterObj');

//Register new user
const handleNewUser = async (req,res,next)=>{
    const {firstName,lastName,email,pwd} = req.body;
    if (!firstName || !lastName || !email || !pwd) {
        return res
          .status(400)
          .json({ message: "Please provide all the fields" });
    }
    const filteredBody = filterObj(req.body,'firstName','lastName','pwd');
    //check if a verified user with the email exists
    const exisistingUser = await User.findOne({email:email});
    if(exisistingUser && exisistingUser.verified){
        res.status(400).json({
            status:'error',
            message:"Email is already in use"
        })
    }else if(exisistingUser){
        //HANDLE_WITH_CARE
        await User.findByIdAndUpdate({email:email},filteredBody,{new:true,validateModifiedOnly:true});
        req.userId = exisistingUser._id;
        next();
    }else{
        //first time 
    }
}

//validateModifiedOnly: true: Instructs Mongoose to only validate fields that have been changed in filteredBody, potentially improving performance.
  