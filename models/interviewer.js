const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Interviewer = sequelize.define('interviewer', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: Sequelize.STRING,
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    counter: Sequelize.SMALLINT,
});

module.exports = Interviewer;