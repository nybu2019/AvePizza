var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kostia210@gmail.com',
    pass: '12711271k'
  }
});

var mailOptions = {
  from: 'kostia210@gmail.com',
  to: 'kostia210@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Drishch is here now'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
