const { response, request } = require('express');
const Asignacion = require('../models/asignacion');
const Maquinaria = require('../models/maquinaria');
const Empleado = require('../models/empleado');

const getAsignacion = async (req, res = response) => {
    try {

        const asignaciones = await Asignacion.findAll({
            include: [
                {
                    model: Empleado,
                    attributes: ['nombre'], // Si necesitas algún atributo específico del empleado
                    as: 'empleado' // El alias de la relación con el modelo Empleado
                },
                {
                    model: Maquinaria,
                    attributes: ['id', 'serie', 'estado'],
                    as: 'maquinaria' // El alias de la relación con el modelo Empleado
                },
            ],

            order: [['estado', 'DESC']]

        });

        res.status(200).json({
            ok: true,
            asignaciones
        })
    } catch (error) {

        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin!!",
            error
        })
    }
}
const postAsignacion = async (req, res = response) => {
    try {

        const { empleadoId, maquinariaId } = req.body;
        console.log(empleadoId);
        const [asignacion, maquinaria] = await Promise.all([

            Asignacion.create({
                empleadoId,
                status: true,
                maquinariaId
            }),
            Maquinaria.update(
                {
                    estado: true
                },
                {
                    where: { id: maquinariaId },
                    returning: true
                }
            )
        ])



        res.status(200).json({
            ok: true,
            asignacion
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}
const putAsignacion = async (req, res = response) => {
    try {
        console.log("Entro*********************************");
        const { maquinariaId, asignacionId } = req.body;

        console.log(maquinariaId);
        console.log(asignacionId);

        const [asignacion, maquinaria] = await Promise.all([

            Maquinaria.update(
                {
                    estado: false
                },
                {
                    where: { id: maquinariaId },
                    returning: true
                }
            ),
            Asignacion.update(
                {
                    estado: false
                },
                {
                    where: { id: asignacionId },
                    returning: true
                }
            )

        ])
        res.status(200).json({
            ok: true
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
    postAsignacion,
    putAsignacion
}

