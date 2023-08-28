const { response, request } = require('express');
const Area =require('../models/area')

const listArea = async(req, res = response) => {
    try {

        const areas = await Area.findAll();


        res.status(200).json({
            ok:true,
            areas
        })
    } catch (error) {
        res.status(404).json({
            ok:false,
            msg:"Hable con el Admin"
        })
    }
}
module.exports = {
    listArea
}

