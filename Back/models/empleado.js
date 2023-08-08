const { DataTypes } = require('sequelize');

const sequelize = require('../DB/config'); 
const Cargo = require('./cargo'); 
const Area = require('./area'); 

const Empleado = sequelize.define('Empleado', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Empleado.belongsTo(Cargo, { foreignKey: 'cargoId', allowNull: false });
  Empleado.belongsTo(Area, { foreignKey: 'areaId', allowNull: false });


  module.exports = Empleado;