const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    title : String,
    rooms: String,
    guests: Number,
    price : Number,
    images: [{
        type: String
    }],
    coords: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

})

module.exports = mongoose.model('property', propertySchema, 'property', { useNewUrlParser: true })