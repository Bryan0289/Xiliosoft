const { response, request } = require('express');
const Cargo =require('../models/cargo')

const listCargos = async(req, res = response) => {
    try {

        const cargos = await Cargo.findAll();


        res.status(200).json({
            ok:true,
            cargos
        })
    } catch (error) {
        res.status(404).json({
            ok:false,
            msg:"Hable con el Admin"
        })
    }
}
module.exports = {
    listCargos
}

