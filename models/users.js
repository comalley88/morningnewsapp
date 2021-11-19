const mongoose = require('mongoose')
const {articleSchema} = require('./articles')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    lastlanguage: String,
    wishlist: articleSchema
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel
