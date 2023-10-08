const Sequelize = require('sequelize');
require('dotenv').config();

const passowrd = process.env.PASSWORD

const sequelize = new Sequelize('chatbot', 'root', passowrd, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;