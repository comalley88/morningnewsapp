const mongoose = require('mongoose')

// const articleSchema = mongoose.Schema({
//     title: String,
//     content: String,
//     img: String,
//     language: String
// })

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    // lastlanguage: String,
    // wishlist: articleSchema
})

const userModel = mongoose.model('users', userSchema)
//const articleModel = mongoose.model('articles', articleSchema)

module.exports = userModel
//module.exports = articleModel