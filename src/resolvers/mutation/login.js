const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../config');

module.exports = async (root, args, context) => {
  const user = await User.findOne({email: args.email});
  if(!user){
    throw("Invalid credentials");
  }
  const isAllowed = await bcrypt.compare(args.password, user.password);
  if(!isAllowed){
    throw("Invalid credentials");
  }
  return jwt.sign({user}, JWT_SECRET);
}