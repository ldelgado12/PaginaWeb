'use strict';
const mongoose = require('mongoose');

let schema_utiles = new mongoose.Schema(
    {
        idcentro : {type : String, required : true},
        nombre : {type : String, required : true},
        tipo : {type : String, required : true},
        ciclo : {type : String, required : true},
        nivel : {type : String, required : true},
        anho : {type : String, required : true},
        util : {type : String, required : true},
        cantidad : {type : String, required : true},
        estado : {type : String, required : false}
    }
);

module.exports = mongoose.model('utiles', schema_utiles);