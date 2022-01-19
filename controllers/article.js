'use strict'

let validator = require('validator')
let Article = require('../models/article')
let fs = require('fs')
let path = require('path')
const { exists } = require('../models/article')
let controller = {
    datosCurso: (req, res) => {
        let hola = req.body.hola
        return res.status(200).send({
            curso : "Master Famework Js",
            autor: "Josseline Sanchez",
            url: "Josseline593",
            hola
        })
    },
    test: (req, res)=>{
        return res.status(200).send({
            status: "error",
            message: "Soy acción del test de mi controlador"
        })
    },
    save: (req, res)=>{
        //recoger parametros por post
        let params = req.body
        console.log(params);
        //validar datos (validator)
        try {
            //validar cuando no este vacio
            var validate_title = !validator.isEmpty(params.title)
            var validate_content = !validator.isEmpty(params.content)
        } catch (error) {
            return res.status(200).send({
                status: "error",
                message: "Faltan datos por enviar"
            })
        }
        if(validate_title && validate_content){
            //crear el objeto a guardar
            let article = new Article()
            //asignar valore
            article.title = params.title
            article.content = params.content
            if(params.image){
                article.image = params.image
            }else
                article.image = null
            //guardar articulos
            article.save((err, articleStored)=>{
                if(err || !articleStored){
                    return res.status(404).send({
                        status: "error",
                        message: "Artículo no se ah guardado !!"
                    })
                }else{
                    //devolver una respuesta
                    return res.status(200).send({
                        status : "success",
                        article
                    })
                }
            })
        }else{
            return res.status(200).send({
                status: "error",
                message: "Los datos no son válidos"
            })
        }
    },
    getArticles: (req, res)=>{
        let query = Article.find({})
        let last = req.params.last
        if(last || last != undefined){
            query.limit(5)
        }
        //Find: buscar sacar los datos de la bd
        //Utilizar el modelo de Articulo
        //sort -campo ordena de forma descendente campo ascendente
        query.sort('-_id').exec((err,articles)=>{
            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "Error al cargar los artículos"
                })
            }
            if(!articles){
                return res.status(404).send({
                    status: "error",
                    message: "No hay artículos para mostrar"
                })
            }
            return res.status(200).send({
                status: "success",
                articles
            })
        })
    },
    getArticle: (req, res) =>{
        //Recoger el id del article
        let articleId = req.params.id
        //COmprobrar que exista el article
        if(!articleId || articleId==null){
            return res.status(404).send({
                status: "error",
                message: "No existe artículo"
            })
        }
        //Buscar el article
        Article.findById(articleId, (err, article)=>{
            if(err||!article){
                return res.status(404).send({
                    status: "error",
                    message: "No existe el artículo"
                })
            }
             //Devolver en json
            return res.status(200).send({
                status: "success",
                article
            })
        })
    },
    update: (req, res)=>{
        //Recoger el id del articulo por la url
        let articleId = req.params.id

        //Recoger los datos que llegan por put
        let params = req.body

        //Validar los datos
        try {
            let validate_title = !validator.isEmpty(params.title)
            let validate_content = !validator.isEmpty(params.content)
            if(validate_title && validate_content){
                Article.findOneAndUpdate({
                    _id: articleId
                }, params,{
                    new: true
                }, (err, articleUpdate) =>{
                    if(err){
                        return res.status(500).send({
                            status: "error",
                            message: "Error al actualizar"
                        })
                    }
                    if(!articleUpdate){
                        return res.status(500).send({
                            status: "error",
                            message: "Error al actualizar"
                        })
                    }
                    return res.status(200).send({
                        status: "success",
                        article: articleUpdate
                    })
                })
            }else{
                return res.status(200).send({
                    status: "error",
                    message: "La validación no es correcta"
                })
            }
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Faltan datos por enviar"
            })
        }
        //Find and update
        //Devolver respuesta
    },
    delete: (req, res)=>{
        //Recoger id de la url
        let articleId = req.params.id
        //Fin and delete
        Article.findOneAndDelete({
            _id:articleId
        }, (err, articleDelete)=>{
            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "Error  al borrar"
                })
            }
            if(!articleDelete){
                return res.status(404).send({
                    status: "error",
                    message: "No se ah borrado el artículo, posiblemente no existe"
                })
            }
            return res.status(200).send({
                status: "success",
                article:articleDelete
            })
        })
    },
    upload: (req, res)=>{
        //Configurar el modulo connect multiparty router/article.js
        //Recoger el fichere de la petición
        let fileName = 'Imagen no subida'
        if(!req.files){
            return res.status(404).send({
                status:"error",
                message: fileName
            })
        }
        //Conseguir nombre y la extensión del archivo
        let filePath = req.files.file0.path
        let fileSplit = filePath.split('\\')
        //Advertencia * en linux y mac
        //let fileSplit = filePath.split('/')
        fileName = fileSplit[2]
        //Extensión del fichero
        let extensionSplit=fileName.split('.')
        let fileExt = extensionSplit[1]
        //Comprobar la extensión, solo imagenes, si es valida borrar el fichero
        if(fileExt != 'png' &&
        fileExt != 'jpg' &&
        fileExt != 'jpeg' &&
        fileExt != 'gif'){
            //Borrar el archivo subido
            fs.unlink(filePath, (err)=>{
                return res.status(200).send({
                    status:'Error',
                    message: 'La extencion de la imagen no es válida'
                })
            })
        }else{
             //Si todo es valido
            let articleId= req.params.id
            if(articleId){
                //Buscar el artículo, asignarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({
                    _id:articleId
                }, {
                    image: fileName
                },{
                    new:true
                },
                (err, articleUpdate)=>{
                    if(err || !articleUpdate){
                        return res.status(404).send({
                            status:'Error',
                            message: 'No se pudo actualizar la imagen'
                        })
                    }
                    return res.status(200).send({
                        status:'success',
                        article:articleUpdate
                    })
                })
            }else{
                return res.status(200).send({
                    status:'success',
                    image: fileName
                })
            }
        }
    },
    getImage: (req, res)=>{
        let file = req.params.image
        let pathFile = `./upload/articles/${file}`
        fs.exists(pathFile,(exists)=>{
            if(exists){
                //Sacar el fichero tal cual
                return res.sendFile(path.resolve(pathFile))
            }else{
                return res.status(404).send({
                    status: "error",
                    message: 'La imagen no existe...'
                })
            }
        })
    },
    search: (req, res)=>{
        //Sacar el string a buscar
        let searchString = req.params.search
        //find or
        Article.find({
            "$or":[
                {
                    "title":{
                        "$regex":searchString,
                        "$options": "i"
                    }
                },
                {
                    "content":{
                        "$regex":searchString,
                        "$options": "i"
                    }
                }
            ]
        }).sort([['date','descending']])
        .exec((err, articles)=>{
            if(err){
                return res.status(500).send({
                    status: "error",
                    message:"Error en la petición !!!"
                })
            }
            if(!articles || articles.length<=0){
                return res.status(404).send({
                    status: "error",
                    message:"No hay articulos que coincidan con la búsqueda"
                })
            }
            return res.status(200).send({
                status: "success",
                articles
            })
        })
    }
}
module.exports = controller