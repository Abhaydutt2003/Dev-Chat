require('dotenv').config();

const mongoose = require("mongoose");
const connectDb = require('./config/DBConfig');
const app = require('./app');

//connect to the database
connectDb();

//edge case, when there is a error that is not handeled by the TRY-CATCH block
process.on('uncaughtException',(err)=>{
    console.log(err);
    process.exit(1);
})

const http = require('http');

//the http.createServer function recieves a callback method, which further takes care of all the http requests
const server = http.createServer(app);

const port = process.env.PORT || 8000;

//establish the connection once connected to mongo
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDb');
    server.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    })
});

//extreme edge case,closes the server and exits the process with error
process.on('unhandledRejection',(err)=>{
    console.log(err);
    server.close(()=>{
        process.exit(1);
    });
})















//explanation for the code above
//exiting the process is a way to prevent the process to continue further
//also the exit code of 1 indicates that there was an error