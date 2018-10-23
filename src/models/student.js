const mongoose  = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  birthDate: Date,
  groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  }]
});

module.exports = mongoose.model('Student', StudentSchema);