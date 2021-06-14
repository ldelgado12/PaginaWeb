
'use strict';
const mongoose = require('mongoose');

let schema_citas = new mongoose.Schema(
    {
        userid : {type : String, required : true},
        centroid : {type : String, required : true},
        razon : {type : String, required : true},
        fecha : {type: Date, required: true},
        hora : {type : String, required : true}
    }
);

module.exports = mongoose.model('Cita', schema_citas);