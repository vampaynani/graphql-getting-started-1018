 const Student = require('../../models/student');

 module.exports = async (root, args, context) => {
   const {name, email, password, birthDate} = args.student;
   const student = await Student.create({name, email, password, birthDate});
   context.pubsub.publish('NEW_STUDENT', {newStudent: student});
   return student;
 }