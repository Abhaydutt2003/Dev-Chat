const mongoose = require('mongoose');


//mongoose is Promise based
const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI);
    }catch(error){
        return console.log('error while connecting ',error);
    }
}

module.exports = connectDb;