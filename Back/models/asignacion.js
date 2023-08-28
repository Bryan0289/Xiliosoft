const { DataTypes } = require('sequelize');

const sequelize = require('../DB/config'); 
const Empleado = require('./empleado'); 
const Maquinaria = require('./maquinaria'); 

const Asignacion = sequelize.define('Asignacion', {
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  });

  Asignacion.belongsTo(Empleado, {as:'empleado', foreignKey: 'empleadoId', allowNull: false });
  Asignacion.belongsTo(Maquinaria, {as:'maquinaria', foreignKey: 'maquinariaId', allowNull: false });


  module.exports = Asignacion;