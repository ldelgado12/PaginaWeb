'use strict';

const model_citas = require('./citas.model');

module.exports.registrar_cita = (req, res) => {
    let cita_nueva = new model_citas(
        {
            userid: req.body.userid,
            centroid: req.body.centroid,
            razon: req.body.razon,
            fecha: req.body.fecha,
            hora: req.body.hora
        }
    );

    cita_nueva.save(
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo registrar la cita, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se registró la cita de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.consultar_citas = (req, res) => {
    model_citas.find({ centroid: req.body.centroid }).then(
        function (citas) {
            if (citas.length > 0) {
                res.json(
                    {
                        success: true,
                        citas: citas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        citas: citas
                    }
                )
            }
        }

    )
};

module.exports.consultar_citas_pf = (req, res) => {
    model_citas.find({ userid: req.body.userid }).then(
        function (citas) {
            if (citas.length > 0) {
                res.json(
                    {
                        success: true,
                        citas: citas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        citas: citas
                    }
                )
            }
        }

    )
};

module.exports.buscarcita_idcita = (req, res) => {
    model_citas.find({ _id: req.body.id_cita }).then(
        function (citas) {
            if (citas) {
                res.json(
                    {
                        success: true,
                        citas: citas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        citas: citas
                    }
                )
            }
        }

    )
};

module.exports.actualizar_cita = function (req, res) {
    model_citas.findByIdAndUpdate(req.body._id, { $set: req.body },
        
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la cita, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se actualizo la cita de forma correcta`
                    }
                )
            }
        }


    );
};

module.exports.eliminar_cita = function (req, res) {
    model_citas.findByIdAndRemove(req.body._id,
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo eliminar la cita, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se elimino la cita de forma correcta`
                    }
                )
            }
        }


    );
};

// Citas para mostrar en el perfil de centro educativo

module.exports.consultar_citas_ce = (req, res) => {
    model_citas.find({ centroid: req.body.centroid }).then(
        function (citas) {
            if (citas.length > 0) {
                res.json(
                    {
                        success: true,
                        citas: citas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        citas: citas
                    }
                )
            }
        }

    )
};