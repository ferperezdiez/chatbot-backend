require('dotenv').config();
const nodemailer = require('nodemailer');
const host = process.env.HOST_NODEMAILER;
const user = process.env.USER_NODEMAILER;
const pass = process.env.PASSWORD_NODEMAILER;


exports.nodemailer = () => {
    return transport = nodemailer.createTransport({
        host: host,
        port: 2525,
        auth: {
          user,
          pass
        }
      });
}