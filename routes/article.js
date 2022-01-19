'use strict'
let express = require('express')
let ArticleController = require('../controllers/article')
let router = express.Router()
let multipart = require('connect-multiparty')
//Indicar el directorio donde se van a guardar los archivos
let mdUpload = multipart({
    uploadDir:'./upload/articles'
})
//Rutas de prueba
router.get('/test-de-controlador',ArticleController.test)
router.post('/datos-curso', ArticleController.datosCurso)

//Ruta listar todos los artículos bd
router.get('/articles/:last?', ArticleController.getArticles)
//Ruta para buscar por id bd
router.get('/article/:id', ArticleController.getArticle)
//Rutas utíles para guardar articulo bd
router.post('/save', ArticleController.save)
//Rutas para actualizar artículo
router.put('/article/:id', ArticleController.update)
//Rutas para eliminar artículo
router.delete('/article/:id', ArticleController.delete)
//Ruta para subir archivos al servidor node
router.post('/upload-image/:id?',mdUpload, ArticleController.upload)
//Ruta para obtener imagen
router.get('/get-image/:image',ArticleController.getImage)
router.get('/search/:search', ArticleController.search)

module.exports = router