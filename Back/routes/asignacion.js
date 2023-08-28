const { Router } = require('express');
const { check }=require('express-validator')

const { validar } = require('../middleware/validar')
const { 
        getAsignacion,
        postAsignacion,
        putAsignacion
        }=require('../controllers/asignacion')

const router = Router();



router.get('/',getAsignacion);
router.post('/',[
        check('empleadoId', 'El Empleado es requerido').notEmpty(),
        check('maquinariaId', 'La Maquinaria es requerida').notEmpty(),
        // TODO: validar empleadoID, maquinariaId que existan en la DB
    validar
],postAsignacion);
router.put('/',[
        check('maquinariaId', 'La Maquinaria es requerida').notEmpty(),
        check('asignacionId', 'La asignacion es requerida').notEmpty(),
        // TODO: validar empleadoID, maquinariaId que existan en la DB
    validar
],putAsignacion);


module.exports= router;