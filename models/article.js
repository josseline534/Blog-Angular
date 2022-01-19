// modelo clase defirnir propiedades
'use strict'
let mongoose = require("mongoose")
let Schema = mongoose.Schema
let ArticleSchema = Schema({
    title:String,
    content:String,
    date:{
        type:Date,
        default: Date.now
    },
    image:String
})
// Exportar nombreDocumento, modeloDocumento
module.exports=mongoose.model('Article', ArticleSchema)
//articles --> guarda documentos de este tipo y con estructura dentro de la colección
