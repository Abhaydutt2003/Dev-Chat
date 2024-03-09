const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const rateLimitOptions = require("./config/rateLimitOptions");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
//TODO look into the headers set by helmet
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss");

const app = express();
app.use(cors(corsOptions));

app.use(express.json({ limit: "10kb", extended: true }));
//TODO change the limit in production
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const limiter = rateLimit(rateLimitOptions);

//use the limiter on the route to protect
app.use("/api", limiter);
app.use(mongoSanitize());
// app.use(xss());

module.exports = app;

//explanation for some of the code above

//$ are reserved bt MongoDb as operators, a malicious user can come and change the context of the database operation
//and $where can actually execute arbitary js.The best way to prevent this is to sanitize the received data, and remove any offending keys, or replace the characters with a 'safe' one.
