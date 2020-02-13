import { ApolloServer } from 'apollo-server';
const isEmail = require('isemail');

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

const context = async ({ req }) => {
  /** simple auth check on every request */
  const auth = (req.headers && req.headers.authorization) || '';
  const email = Buffer.from(auth, 'base64').toString('ascii');
  if (!isEmail.validate(email)) return { user: null };

  /** find a user by their email */
  const users = await store.users.findOrCreate({ where: { email } });
  const user = (users && users[0]) || null;

  return { user: { ...user.dataValues } };
};

const server = new ApolloServer({ typeDefs, resolvers, context, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
