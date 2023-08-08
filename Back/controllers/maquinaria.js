const { response, request } = require('express');
const Maquinaria = require('../models/maquinaria')


const getMaquinaria = async (req, res = response) => {
    try {

        const maquinaria = await Maquinaria.findAll()


        res.status(404).json({
            ok: true,
            maquinaria
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
            descripcion
        });
        nuevoEmpleado.save();
        res.status(404).json({
            ok: true,
            nuevaMaquinaria: maquinaria
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}

const putMaquinaria = async (req=request, res = response) => {
    try {
        const {id}=req.params;
        const { serie, descripcion, estado } = req.body;

        const maquinaActualizada = await Maquinaria.update(
            {
              serie,
              descripcion,
              estado
            },
            {
              where: { id },
              returning: true
            }
          );
        res.status(404).json({
            ok: true,
            maquinaActualizada: maquinaria
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}

const deleteMaquinaria = async (req=request, res = response) => {
    try {
        const {id}=req.params;

        const maquinaActualizada = await Maquinaria.update(
            {
              status:false
            },
            {
              where: { id },
              returning: true
            }
          );
        res.status(404).json({
            ok: true,
            maquinaActualizada: maquinaria
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
    postMaquinaria,
    putMaquinaria,
    deleteMaquinaria
}