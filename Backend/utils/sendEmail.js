//TODO change the product link

const nodemailer = require("nodemailer");
const mailgen = require("mailgen");

let config = {
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSOWORD,
  },
};
let transporter = nodemailer.createTransport(config);

let mailGenerator = new mailgen({
  theme: "default",
  product: {
    name: "DEV-CHAT",
    link: "http://localhost:5173",//this will be changed during production
  },
});


/**
 * Send OTP to user 
 * @param {String} userName
 * @param {String} userEmail  
 * @param {String} userOTP 
 * @returns 
 */
const mailOtp = async (userName,userEmail,userOTP) => {
  let emailContent = {
    body: {
      name: userName,
      intro: "Enter the following OTP to register on DEV-CHAT",
    },
    action: {
      instructions: "The OTP will expire in 10 mins",
      button: {
        color: "#DC4D2F",
        text: userOTP,
      },
    },
    outro: "If the OTP expires, please register again",
  };
  let emailBody = mailGenerator.generate(emailContent);
  let message = {
    from: process.env.APP_EMAIL,
    to:userEmail,
    subject: "Register at DEV-CHAT",
    html: emailBody,
  };
  try {
    transporter.sendMail(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "There was an error in sending the email",
    });
  }
};


/**
 * Send the reset link to the user
 * @param {String} userName 
 * @param {String} userEmail 
 * @param {String} resetUrl 
 * @returns 
 */
const mailReset = async (userName,userEmail, resetUrl) => {
  let emailContent = {
    body: {
      name: userName,
      intro: "Password reset",
      action: {
        instructions:
          "Please click on the following link to reset you password",
        button: {
          color: "#DC4D2F",
          text: "Go to link",
          link: resetUrl,
        },
      },
      outro:
        "Please reply back to the email if you did not request the password reset",
    },
  };
  let emailBody = mailGenerator.generate(emailContent);
  let message = {
    from: process.env.APP_EMAIL,
    to:userEmail,
    subject: "Password reset",
    html: emailBody,
  };
  try {
    transporter.sendMail(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "There was an error in sending the email",
    });
  }
};

module.exports = { mailOtp, mailReset };
