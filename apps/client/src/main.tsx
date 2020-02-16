import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

/** Custom imports */
import { GlobalStyles, Login, PageContainer } from '@bsc/client/components';
import { typeDefs, resolvers } from './schema/resolvers';
import App from './app/App';

const cache = new InMemoryCache();

const link = new HttpLink({
  headers: { authorization: localStorage.getItem('token') },
  uri: 'http://localhost:4000/',
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: [],
  },
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const IsLoggedIn = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? (
    <App />
  ) : (
    <PageContainer>
      <Login />
    </PageContainer>
  );
};

/** Get a root element from our index.html */
const root = document.getElementById('root');

/** Render our Application */
const renderApp = () => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <IsLoggedIn />
  </ApolloProvider>
);

ReactDOM.render(renderApp(), root);
