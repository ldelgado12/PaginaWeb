'use strict';
const model_utiles = require('./utiles.model');


module.exports.registrar = (req, res) => {
    let utiles_nueva = new model_utiles(
        {
            idcentro: req.body.idcentro,
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            ciclo: req.body.ciclo,
            nivel: req.body.nivel,
            anho: req.body.anho,
            util: req.body.util,
            cantidad: req.body.cantidad,
            estado: 'activo'
        }
    );
    utiles_nueva.save(
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo guardar la pregunta ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se registró la pregunta de forma correcta`
                    }
                )
            }
        }

    );
};





module.exports.consultar_utiles = (req, res) => {
    model_utiles.find({ idcentro: req.body.idcentro }).then(
        function (utiles) {
            if (utiles.length > 0) {
                res.json(
                    {
                        success: true,
                        utiles: utiles
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        utiles: utiles
                    }
                )
            }
        }

    );
};

module.exports.buscar_por_id = function (req, res) {
    model_utiles.find({ _id: req.body.id_util }).then(
        function (util) {
            if (util) {
                res.json({ success: true, util: util });
            } else {
                res.json({ success: false, util: util});
            }
        }
    );
};

module.exports.actualizar = function (req, res) {
    model_utiles.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la informacion ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se actualizo la informacion de forma correcta`
                    }
                );
            }
        }

    );
};

module.exports.desactivar = function (req, res) {
    model_utiles.findByIdAndUpdate(req.body.id, { $set: { estado: 'desactivado' } },
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo desactivar la informacion ocurrió el siguiente error ${error}`
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se desactivo la informacion de forma correcta`
                    }
                );
            }
        })
};

module.exports.activar = function (req, res) {
    model_utiles.findByIdAndUpdate(req.body.id, { $set: { estado: 'activado' } },
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo activar la informacion ocurrió el siguiente error ${error}`
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se activo la informacion de forma correcta`
                    }
                );
            }
        })

};

module.exports.eliminar = function(req, res){
    model_utiles.findByIdAndRemove(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el util '});
            }else{
                res.json({success: true ,msg: 'El util se eliminó con éxito'}); 
            }
        }
    )
};