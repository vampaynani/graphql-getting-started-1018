const Group = require('../models/group');

module.exports = {
  groups: async (parent, args) => {
    return await parent.groups.map(groupId => Group.findById(groupId));
  }
}