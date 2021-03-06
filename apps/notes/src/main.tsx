/**
 * We can us this line at the top of the file
 * to solve module.hot.accept TypeScript problem.
 *
 * ///<reference types="webpack-env" />
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { setupI18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import catalogCS from './locales/cs/messages.js';
import catalogEN from './locales/en/messages.js';

/** Custom imports */
import { App } from '@bsc/notes/app';

const cache = new InMemoryCache();

const link = new HttpLink({
  // headers: { authorization: localStorage.getItem('token') },
  uri: 'http://localhost:4000/',
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

/** I18n catalogs */
const catalogs = {
  cs: catalogCS,
  en: catalogEN,
};

const i18n = setupI18n({ language: 'en' });
i18n.load(catalogs);
i18n.activate('en');

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const load = (messages: any, Component = App) => {
  render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <I18nProvider i18n={i18n} language="en">
          <Component i18n={i18n} />
        </I18nProvider>
      </ApolloProvider>
    </BrowserRouter>,
    MOUNT_NODE,
    /** TODO DELETE THIS COMMENT: Just to show callback of render method */
    () => console.log(`${Component.name} component is mounted!`)
  );
};

load(null, App);

/**
 * (module as any).hot fixes TypeScript error.
 */
if ((module as any).hot) {
  (module as any).hot.accept(['./components/App/App'], () => {
    unmountComponentAtNode(MOUNT_NODE);
    const App = require('./components/App/App').default;
    render(null, App);
  });
}
