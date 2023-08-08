const { Router } = require('express');
const { check } = require('express-validator')


const { validar } = require('../middleware/validar')

const { getEmpleado,
        postEmpleado,
        putEmpleado,
        deleteEmpleado } = require('../controllers/empleado')

const router = Router();


router.get('/', getEmpleado);
router.post('/', [
        // TODO:Validar la cedula unica en DB
        // TODO: validar empleadoID, maquinariaId que existan en la DB

        check('nombre', 'El nombre es requerido').notEmpty(),
        check('cedula', 'La cedula es requerido').notEmpty(),
        check('areaid', 'El area es requerido').notEmpty(),
        check('cargoId', 'El cargo es requerido').notEmpty(),
        validar
], postEmpleado);
router.put('/:id', [
        // TODO:Validar la id en DB
        // TODO:Validar la cedula unica en DB
        // TODO: validar empleadoID, maquinariaId que existan en la DB

        check('id', 'El id es requerido').notEmpty(),
        check('nombre', 'El nombre es requerido').notEmpty(),
        check('cedula', 'La cedula es requerido').notEmpty(),
        check('areaid', 'El area es requerido').notEmpty(),
        check('cargoId', 'El cargo es requerido').notEmpty(),
        validar
], putEmpleado);
router.delete('/:id', [
        // TODO:Validar la id en DB
        check('id', 'El id es requerido').notEmpty(),
        validar
], deleteEmpleado);

module.exports = router;