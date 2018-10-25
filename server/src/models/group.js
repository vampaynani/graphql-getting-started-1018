const mongoose  = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Group', GroupSchema);