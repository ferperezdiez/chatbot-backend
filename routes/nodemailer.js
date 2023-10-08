const express = require('express');
const { sendKey } = require('../controllers/emails');
const route = express.Router();


route.post('/key', sendKey);

module.exports = route;