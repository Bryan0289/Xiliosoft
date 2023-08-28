const { Router } = require('express');
const { check } = require('express-validator')

const { validar } = require('../middleware/validar')
const { getMaquinaria,
    getMaquinariaDisponible,
    postMaquinaria,
    putMaquinaria,
    deleteMaquinaria
} = require('../controllers/maquinaria')

const router = Router();



router.get('/', getMaquinaria);
router.get('/disponible', getMaquinariaDisponible);
router.post('/', [
    //TODO:Validar serie unica
    check('serie', 'La serie es requerida').notEmpty(),
    check('descripcion', 'La descripcion es requerida').notEmpty(),
    validar
], postMaquinaria);
router.put('/:id', [
    //TODO:Validar la id en DB 
    //TODO:Validar serie unica
    check('id', 'El id es requerido').notEmpty(),
    check('serie', 'La serie es requerida').notEmpty(),
    check('descripcion', 'La descripcion es requerida').notEmpty(),
    validar
], putMaquinaria);
router.delete('/:id', [
    //TODO:Validar la id en DB 
    check('id', 'El id es requerido').notEmpty(),
    validar
], deleteMaquinaria);

module.exports = router;