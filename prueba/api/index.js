'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,

    // Base de datos de loscaballerosdelamesaredonnda@gmail.com
    dburl = 'mongodb://admin:admin1234@cluster0-shard-00-00-zmmky.gcp.mongodb.net:27017,cluster0-shard-00-01-zmmky.gcp.mongodb.net:27017,cluster0-shard-00-02-zmmky.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    //dburl = 'mongodb://admin_migue:clave@cluster0-shard-00-00-oiy6d.mongodb.net:27017,cluster0-shard-00-01-oiy6d.mongodb.net:27017,cluster0-shard-00-02-oiy6d.mongodb.net:27017/centro_educativo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', //usando mongoDb Atlas,
    //dburl = 'mongodb://pabs:1biblioteca9@ds163680.mlab.com:63680/bd_biblioteca' //usando mlab,
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Llamada de los api de la aplicacion

const usuarios = require('./componentes/usuarios/usuarios.route');

const citas = require('./componentes/citas/citas.route');
const etiquetas = require('./componentes/etiquetas/etiquetas.route');

//const comentario = require('./componentes/reg_utiles_mep/reg_utiles.route');

//const utiles = require('./componentes/reg_utiles/reg_utiles.route');

const noticias = require('./componentes/noticias/noticias.route');

const actividad = require('./componentes/actividad/actividad.route');

const evaluacion_ce = require('./componentes/rating/rating.route');

const utiles = require('./componentes/reg_utiles/utiles.route');

const pregunta = require('./componentes/pregunta/preguntas.route');

const transacciones = require('./componentes/transacciones/transacciones.route');
const servicios = require('./componentes/servicios/servicios.route');



app.use('/api', utiles);


//app.use('/api', comentario);

app.use('/api', usuarios);

app.use('/api', citas);

app.use('/api', noticias);

app.use('/api', actividad);
app.use('/api', etiquetas);
app.use('/api', pregunta);
app.use('/api', evaluacion_ce);
app.use('/api', transacciones);
app.use('/api', servicios);



// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};