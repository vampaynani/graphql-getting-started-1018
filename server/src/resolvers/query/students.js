const Student = require('../../models/student');

module.exports = async (root, args, context) => {
  return await Student.find();
}