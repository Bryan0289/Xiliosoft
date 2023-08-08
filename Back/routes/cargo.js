const { Router } = require('express');
const { check }=require('express-validator')

const { listCargos
        }=require('../controllers/cargo')

const router = Router();

// router.get('/list',[
//     validarJWT,
//     validarUser,
//     validarRole("AdminRole")
// ],list)

router.get('/',listCargos);

module.exports= router;