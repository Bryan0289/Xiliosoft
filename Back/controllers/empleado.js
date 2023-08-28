const { response, request } = require('express');
const Empleado = require('../models/empleado')

const getEmpleado = async (req, res = response) => {
    try {

        const empleados = await Empleado.findAll({
            where: {
                status: true
              }
        })


        res.status(200).json({
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
        console.log(req.body);
        const { nombre,cedula, cargoId, areaId } = req.body;
        
        const nuevoEmpleado = await Empleado.create({
            nombre,
            cedula,
            status:true,
            cargoId,
            areaId}
        );
        res.status(200).json({
            ok: true,
            empleado: nuevoEmpleado
        })
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Hable con el Admin"
        })
    }
}
const putEmpleado = async (req=params, res = response) => {
    console.log("entro");
    try {
        const {id}=req.params
        const { nombre,cedula,status, cargoId, areaId } = req.body;
        await Empleado.update(
            {
              nombre,
              cedula,
              status,
              cargoId,
              areaId,
            },
            {
              where: { id },
              returning: true
            }
          );
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
const deleteEmpleado = async (req=request, res = response) => {
    try {
        const { id } = req.params;
        await Empleado.update(
            {
              status:false
            },
            {
              where: { id },
              returning: true
            }
          );
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
    getEmpleado,
    postEmpleado,
    putEmpleado,
    deleteEmpleado
}

