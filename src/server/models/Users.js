const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    favourites: {
        type: Map,
        of: String
    }
})

module.exports = mongoose.model('user', userSchema, 'user', { useNewUrlParser: true })
