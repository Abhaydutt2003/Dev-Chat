const jwt = require("jsonwebtoken");
//const User = require("../Models/User");
require("dotenv").config(); //to use the env files in the project

//this middleware will be used in the routes that we want to protect, (all the routes that deal with sensitive information)
const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  //check if there is no token
  if (!authHeader?.startsWith("Bearer")){
    return res.status(401).json({status:'error',message:'Unauthorized'})
  };
  const token = authHeader.split(" ")[1];
  //verify the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      res.status(403).json({status:'error',message:'Incorrect token'})
    }
    req.userId = decoded.UserInfo.userId;
    req.jwtIssueTime = decoded.iat;
    next();
  });
};

module.exports = verifyJwt;

//will send the jwt iat (issued at) with the req object becuase of a edge case
//the protected route will check if the password was changed a time after the
//token was issued. if that happpes, we will send a 401 signal , and force the
//user to login again.
