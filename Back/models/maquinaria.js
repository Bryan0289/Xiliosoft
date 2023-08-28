const { DataTypes } = require('sequelize');

const sequelize = require('../DB/config'); 

const Maquinaria = sequelize.define('Maquinaria', {
    serie: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
  });

  module.exports = Maquinaria;