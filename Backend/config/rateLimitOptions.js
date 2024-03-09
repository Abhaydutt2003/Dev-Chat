const rateLimitOptions = {
  max: 3000,
  windowMs: 60 * 60 * 1000, //In one hour
  message: "Too many requests from the IP, try again in one hour",
};

module.exports = rateLimitOptions;
