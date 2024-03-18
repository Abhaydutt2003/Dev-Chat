const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');

const rickRoll = async(req,res)=>{
  // const {email} = req;
  let config = {
    service:'gmail',
    auth:{
      user:process.env.APP_EMAIL,
      pass:process.env.APP_PASSOWORD,
    }
  }
  let transporter = nodemailer.createTransport(config);
  let mailGenerator = new Mailgen({
    theme:'default',
    product:{
      name:"Abhay Dutt",
      link:'https://mailgen.js/'
    }
  });
  let emailContent={
    body:{
      name:'Babu',
      intro:'I love you so much!!!!!',
      action:{
        instructions:'My code works , this was just a test',
        button:{
          color:'#FF69B4',
          text:'I will be your\'s forever',
        }
      },
      outro:'also can you please come and hug me?'
    }
  }
  let emailBody = mailGenerator.generate(emailContent); 
  let message={
    from:process.env.APP_EMAIL,
    to:'dutt.abhay@gmail.com',
    subject:'Get rickRolled',
    html:emailBody
  }
  transporter.sendMail(message).then(()=>{
    return res.status(201).json({
      status:'success',
      message:'You should recieve a email'
    })
  }).catch((error)=>{
    console.log(error);
    return res.status(500).json({
      status:'error',
      message:'Their was a server error'
    })
  });

};






module.exports = rickRoll;