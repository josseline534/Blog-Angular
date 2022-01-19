"use strict"

//Cargar modulos de node
let express = require("express")
let bodyParser = require("body-parser")
// Ejecutar express
let app = express()

//Cargar ficheros rutas
let articleRoutes = require('./routes/article')

//Middlewares procesa datos antes de cargar ruta
app.use(bodyParser.urlencoded({extended:false})) //carga el body-parser
app.use(bodyParser.json())
//CORS: acceso cruzado entre dominios
//su config permite el acceso o llamada http, ajax o asincronas
//al api de cualquier frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Añadir prefijos o rutas / cargar rutas
app.use('/api',articleRoutes)

//Exportar modulo (fichero actual)
module.exports = app