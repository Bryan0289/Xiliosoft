const { DataTypes } = require('sequelize');

const sequelize = require('../DB/config'); 

const Area = sequelize.define('Area', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  module.exports = Area;