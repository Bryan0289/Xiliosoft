const { DataTypes } = require('sequelize');

const sequelize = require('../DB/config'); 

const Cargo = sequelize.define('Cargo', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  module.exports = Cargo;