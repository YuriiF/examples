import { ApolloServer } from 'apollo-server';

/** Custom imports */
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
import { NoteAPI } from './datasources/notes';

const dataSources = () => ({
  noteAPI: new NoteAPI(),
  // userAPI: new UserAPI({ store }),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // mockEntireSchema: true,
  // mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
