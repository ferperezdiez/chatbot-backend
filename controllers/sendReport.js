const { nodemailer } = require("../utils/nodemailer");


exports.sendReport = (question, data, email) => {

    nodemailer(); 
    const mailOptions = {
        from: 'sender@gmail.com',
        to: `perezdiezf@gmail.com`, 
        subject: 'chatbot notification',
        html: `<div  style="margin: 1.5rem;">
        <p style="margin-bottom: 3rem;">Dear Fernando,</p>
        <p>${email}</p>
        <p>${question}</p>
        <p>${data[0].message.content}</p>
        </div>`, 
   };

      transport.sendMail(mailOptions, function(err, info) {
        if (err) {
          return res.send(err)
        } else {
          return res.send(info);
        }
    });
    
}

