
'use strict';
const mongoose = require('mongoose');

let schema_servicios = new mongoose.Schema(
    {
        userid : {type : String, required : true},
        titulo : {type : String, required: true},
        descripcion : {type: String, required: true},
    }
);

module.exports = mongoose.model('Servicio', schema_servicios);