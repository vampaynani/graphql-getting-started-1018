const Student = require('../../models/student');
const Group = require('../../models/group');

module.exports = async (root, args) => {
  // return await Group.create({name: args.name})
  // .then(group => {
  //   return Student.findByIdAndUpdate(args.id, { $push: {groups: group} }, {new: true});
  // })
  const group = await Group.create({name: args.name});
  const student = await Student.findByIdAndUpdate(args.id, { $push: {groups: group} }, {new: true});
  return student;
}