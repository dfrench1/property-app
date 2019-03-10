const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    title : String,
    rooms: String,
    guests: Number,
    price : Number,
    images: {
        type: Map,
        of: String
    }
})

module.exports = mongoose.model('property', propertySchema, 'property', { useNewUrlParser: true })