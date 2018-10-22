const { GraphQLServer } = require('graphql-yoga');

const typeDefs='./src/schema.graphql';
const Query = require('./resolvers/query');

const resolvers= {
  Query
}


const server = new GraphQLServer({
  typeDefs,
  resolvers
})

if (require.main === module) {
  server.start(() => console.log(`Server is running`));
}