const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const viewingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creator: {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },
  property: {
    type: Schema.Types.ObjectId,
    ref: 'property'
  }
  
});

module.exports = mongoose.model('Event', viewingSchema);
