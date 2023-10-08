const express = require('express');
const { checkKey } = require('../controllers/checkKey');
const routes = express();


routes.get('/login', checkKey);

module.exports = routes

