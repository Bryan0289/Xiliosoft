const { Router } = require('express');
const { check }=require('express-validator')

const { listArea
        }=require('../controllers/area')

const router = Router();



router.get('/',listArea);

module.exports= router;