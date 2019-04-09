const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    favourites: {
        type: Map,
        of: String
    },
    createdEvents: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Event'
        }
    ],
    properties: [
        {
          type: Schema.Types.ObjectId,
          ref: 'property'
        }
    ],
    admin: {
      type: Boolean,
      default: false
    }

})

module.exports = mongoose.model('user', userSchema, 'user', { useNewUrlParser: true })
