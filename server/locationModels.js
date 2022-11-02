cpmst mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pinSchema = new Schema({
  city: {type: String, required:true},
  country: {type: String, required: true},
  type: {type: String},
  recommendation: {type: String, required: true},
  recommended_by: {type: String}
});

module.exports = mongoose.model('pin', pinSchema);