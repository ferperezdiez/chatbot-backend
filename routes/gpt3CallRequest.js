const express = require('express');
const { getAnswer } = require('../controllers/getAnswer');
const routes = express.Router();



routes.post('/request', getAnswer);

module.exports = routes;