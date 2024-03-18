//THIS ROUTE SHOULD BE PROTECTED

const express = require('express');
const router = express.Router(); 
//const verifyJwt = require("../"); Instead of using the middleware here make sure to use it with the app in index file

const userController = require('../controllers/userController'); 

router.post('/',userController);
module.exports = router;




