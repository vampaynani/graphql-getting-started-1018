const Student = require('../../models/student');

module.exports = async (root, args) => {
  return await Student.findById(args.id);
}