var mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    img: String,
    language: String
})


const articleModel = mongoose.model('articles', articleSchema)

module.exports = {articleModel, articleSchema}