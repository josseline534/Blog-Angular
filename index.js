"use strict"; //Mejores prácticas con node
let mongoose = require("mongoose"); //importar modulo
let app = require("./app") // Requerir modulos creados
let port = 1800
//Forzar metodos antiguos para trabajar con mongo
mongoose.set('useFindAndModify', false)

//Trabajar con promesa
mongoose.Promise = global.Promise;

//Crear conexión
let url = "mongodb://localhost:27017/api_rest_blog"; //localhost:puerto/nombreBD
let opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(url, opciones).then(() => {
    console.log("Conexión exitosa!!!");

    //Crear servidor
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    })
}); //Conexión por medio de una promesa


