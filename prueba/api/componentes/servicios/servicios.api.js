'use strict';

const model_servicios = require('./servicios.model');

module.exports.registrar_servicio = (req, res) => {
    let servicio_nuevo = new model_servicios(
        {
            userid: req.body.userid,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
        }
    );

    servicio_nuevo.save(
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo registrar el servicio, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se registró el servicio de forma correcta`
                    }
                )
            }
        }

    );
};

module.exports.consultar_servicios = (req, res) => {
    model_servicios.find({userid: req.body.userid}).then(
        function (servicio) {
            if (servicio) {
                res.json(
                    {
                        success: true,
                        servicio: servicio
                    }
                )
            } else{
                res.json(
                    {
                        success: false,
                        servicio: `Error, no se encontraron servicio: ${servicio}`
                    }
                )
            }
        }

    )
};

module.exports.eliminar_servicio = function (req, res) {
    model_servicios.findByIdAndRemove(req.body._id,
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo eliminar el servicio, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se elimino el servicio de forma correcta`
                    }
                )
            }
        }


    );
};

module.exports.actualizar_servicio = function (req, res) {
    model_servicios.findByIdAndUpdate(req.body._id, { $set: req.body },
        
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar el servicio, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se actualizo el servicio de forma correcta`
                    }
                )
            }
        }


    );
};

module.exports.buscar_servicio = (req, res)=>{
    model_servicios.findOne({_id : req.body._id}).then(
        function(servicio){
            if(servicio){
                res.json({
                    success:true,
                    servicio: servicio
                });
            }else{
                res.json({
                    success:false,
                    msj: 'No se encontró el servicio'
                });
            }

        }
    )
};