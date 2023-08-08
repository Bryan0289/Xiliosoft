const { response, request } = require('express');
const Asignacion =require('../models/asignacion')

const getAsignacion = async(req, res = response) => {
    try {

        const asignacion = await Asignacion.findAll();


        res.status(404).json({
            ok:true,
            asignacion
        })
    } catch (error) {
        res.status(404).json({
            ok:false,
            msg:"Hable con el Admin"
        })
    }
}
const postAsignacion = async (req, res = response) => {
    try {

        const { empleadoId, maquinariaId } = req.body;

        const nuevaAsignacion = await Asignacion.create({
            empleadoId,
            maquinariaId
        });
        nuevaAsignacion.save();
        res.status(404).json({
            ok: true,
            nuevaAsignacion: asignacion
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}
module.exports = {
    getAsignacion,
    postAsignacion
}

