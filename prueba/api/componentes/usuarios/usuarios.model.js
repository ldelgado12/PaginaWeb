'use strict';
const mongoose = require ('mongoose');

let schema_usuarios = new mongoose.Schema(
    {   
        //Compartido y padre de familia
        nombre : {type : String, required : false},
        segundo_nombre: {type : String, required : false},
        papellido : {type : String, required : false},
        sapellido : {type : String, required : false},
        identificacion : {type : String, required : false},
        cantidad_hijos : {type : String, required : false},
        correo_electronico : {type : String, required : false},
        clave: {type : String, required: false},
        telefono : {type : String, required : false},
        provincia : {type : String, required : false},
        canton : {type : String, required : false},
        distrito: {type : String, required : false},
        direccion: {type : String, required : false},
        tipo_id: {type : String, required: false},

        //Exclusivo centro educativo//
        alias : {type : String, required : false},
        cedula_juridica : {type : String, unique : false, required : false},
        tipo_centro : {type : String, required : false},
        nivel_centro : {type : String, required : false},
        foto : {type : String, required : false},
        nombre_comercial : {type : String, required : false},
        fecha_fundacion : {type : String, required : false},
        referencia_historia : {type : String, required : false},
        adjuntar_documentos : {type : String, required : false},
        fax : {type : String, required : false},
        sitio_web : {type : String, required : false},
        facebook : {type : String, required : false},
        youtube : {type : String, required : false},
        instagram : {type : String, required : false},
        twitter : {type : String, required : false},
        contacto_nombre : {type : String, required : false},
        departamento : {type : String, required : false}, 
        telefono_contacto : {type : String, required : false},
        extension_contacto : {type : String, required : false},
        correo_electronico_contacto : {type : String, required : false},
        evaluacion_mep : {type : Number, required : false},

        //Todos los usuarios
        tipo_usuario : {type : String, required : false},
        estado : {type : String, required : false},
        fecha_registro : {type : String, required : false}
    }
);

module.exports = mongoose.model('usuarios', schema_usuarios);