const express = require('express');
const cors = require('cors');
const getAnswer = require('./routes/gpt3CallRequest')
const sequelize = require('./utils/database');
const Interviewer = require('./models/interviewer');
const sendKey = require('./routes/nodemailer');
const checkKey = require('./routes/login');

require('dotenv').config();

const urlOrigin = process.env.ORIGIN_URL

const app = express();
app.use(cors({
    origin: urlOrigin
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(getAnswer);
app.use(sendKey);
app.use(checkKey);

sequelize.sync()
    .then(() => app.listen(8080, () => console.log(`served in port 8080`)))
    .catch((err) => console.log(err))
