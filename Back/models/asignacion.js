const { DataTypes } = require('sequelize');

const sequelize = require('../DB/config'); 
const Empleado = require('./empleado'); 
const Maquinaria = require('./maquinaria'); 

const Asignacion = sequelize.define('Asignacion', {
    
  });

  Asignacion.belongsTo(Empleado, { foreignKey: 'empleadoId', allowNull: false });
  Asignacion.belongsTo(Maquinaria, { foreignKey: 'maquinariaId', allowNull: false });


  module.exports = Asignacion;