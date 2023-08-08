const dbConneccion = async () => {
    const sequelize = require('./config');
    
    try {
      await sequelize.authenticate();
      console.log('Conexión a la base de datos establecida correctamente.');
      
      const Usuario = require('../models/cargo');
      const Area = require('../models/area');
      const Maquinaria = require('../models/maquinaria');
      const Empleado = require('../models/empleado');
      const Asignacion = require('../models/asignacion');
      
      await sequelize.sync();
            
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
};

module.exports={
    dbConneccion
}