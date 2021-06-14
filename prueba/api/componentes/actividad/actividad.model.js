'use strict';
const mongoose = require('mongoose');

let schema_actividad = new mongoose.Schema(
    {
        userid : {type : String, required : true},
        titulo : {type : String, required : true},
        actividad : {type : String, required : true},
        foto :{type : String, required : true},
        estado : {type : String, required : true}
    }
);

module.exports = mongoose.model('Actividad', schema_actividad);