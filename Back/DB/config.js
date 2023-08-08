const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('xiliosoft', process.env.USER, process.env.PASSWORD, {
  host: "localhost",
  dialect: 'mysql',
});

module.exports = sequelize;