module.exports = {
  subscribe: (root, args, context) => {
    return context.pubsub.asyncIterator('NEW_STUDENT');
  }
}