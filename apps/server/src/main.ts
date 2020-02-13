import { ApolloServer } from 'apollo-server';

/** Custom imports */
const { createStore } = require('./utils');
import LaunchAPI from './datasources/launch';
import UserAPI from './datasources/user';
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';

const store = createStore();

const dataSources = () => ({
  launchAPI: new LaunchAPI(),
  userAPI: new UserAPI({ store }),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
