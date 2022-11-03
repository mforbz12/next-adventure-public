const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pinSchema = new Schema({
  lat: {type: Number, required:true},
  lng: {type: Number, required: true},
  type: {type: String},
  rand: {type: String},
  recommendation: {type: String, required: true},
  recommended_by: {type: String}
});

const Pin = mongoose.model('pin', pinSchema);
module.exports = {
  Pin,
}