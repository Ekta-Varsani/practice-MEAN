const nodemailer = require("nodemailer");


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ektavarsani13@gmail.com',
      pass: 'rapfortijgtoxwhz'
    }
  });
  
  var mailOptions = {
    from: 'ektavarsani13@gmail.com',
    to: 'ektavarsani13@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });




 