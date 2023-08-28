const { response, request } = require('express');
const Maquinaria = require('../models/maquinaria')


const getMaquinaria = async (req, res = response) => {
    try {

        const maquinarias = await Maquinaria.findAll({
            where: {
                status: true 
            }
        })


        res.status(200).json({
            ok: true,
            maquinarias
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}

const getMaquinariaDisponible = async (req, res = response) => {
    try {

        const maquinarias = await Maquinaria.findAll({
            
            where: {
                status: true,
                estado:false
            }
        })


        res.status(200).json({
            ok: true,
            maquinarias
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}


const postMaquinaria = async (req, res = response) => {
    try {

        const { serie, descripcion } = req.body;

        const nuevaMaquinaria = await Maquinaria.create({
            serie,
            status: true,
            descripcion
        });
        res.status(200).json({
            ok: true,
            maquinaria: nuevaMaquinaria
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}

const putMaquinaria = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { serie, descripcion, estado } = req.body;

        const maquinaActualizada = await Maquinaria.update(
            {
                serie,
                descripcion,
                status: true
            },
            {
                where: { id },
                returning: true
            }
        );
        res.status(200).json({
            ok: true,
            maquinaria: maquinaActualizada
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}

const deleteMaquinaria = async (req = request, res = response) => {
    try {
        const { id } = req.params;

        const maquinariaEliminada = await Maquinaria.update(
            {
                status: false
            },
            {
                where: { id },
                returning: true
            }
        );
        res.status(200).json({
            ok: true,
            maquinaria: maquinariaEliminada
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}


module.exports = {
    getMaquinaria,
    getMaquinariaDisponible,
    postMaquinaria,
    putMaquinaria,
    deleteMaquinaria
}