const { response, request } = require('express');
const Empleado = require('../models/empleado')

const getEmpleado = async (req, res = response) => {
    try {

        const empleados = await Empleado.findAll()


        res.status(404).json({
            ok: true,
            empleados
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}
const postEmpleado = async (req, res = response) => {
    try {

        const { nombre,cedula, cargoId, areaId } = req.body;

        const nuevoEmpleado = await Empleado.create({
            nombre,
            cedula,
            cargoId,
            areaId,
        });
        nuevoEmpleado.save();
        res.status(404).json({
            ok: true,
            nuevoEmpleado: empleado
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}
const putEmpleado = async (req=params, res = response) => {
    try {
        const {id}=req.params
        const { nombre,cedula, cargoId, areaId } = req.body;
        const empleadoActualizado = await Empleado.update(
            {
              nombre,
              cedula,
              cargoId,
              areaId,
            },
            {
              where: { id },
              returning: true
            }
          );
        res.status(404).json({
            ok: true,
            empleadoActualizado: empleado
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}
const deleteEmpleado = async (req=request, res = response) => {
    try {
        const { id } = req.params;
        const empleadoEliminado = await Empleado.update(
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
            empleadoEliminado: empleado
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}
module.exports = {
    getEmpleado,
    postEmpleado,
    putEmpleado,
    deleteEmpleado
}

