const express = require('express');
const cors = require('cors');
const {dbConneccion} = require('../DB/dbConnection');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.Path = '/api';

        this.conectarDB();

        this.middlewares();

        this.routes();
    }
    async conectarDB(){
        await dbConneccion()
    }

    middlewares() {


        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( `${this.Path}/cargo`, require('../routes/cargo'));
        this.app.use( `${this.Path}/area`, require('../routes/area'));
        this.app.use( `${this.Path}/empleado`, require('../routes/empleado'));
        this.app.use( `${this.Path}/maquinaria`, require('../routes/maquinaria'));
        this.app.use( `${this.Path}/asignacion`, require('../routes/asignacion'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;