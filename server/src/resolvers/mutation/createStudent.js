 const Student = require('../../models/student');

 module.exports = async (root, args) => {
   const {name, email, password, birthDate} = args.student;
   return await Student.create({name, email, password, birthDate});
 }