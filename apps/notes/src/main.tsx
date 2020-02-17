/**
 * We can us this line at the top of the file
 * to solve module.hot.accept TypeScript problem.
 *
 * ///<reference types="webpack-env" />
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@bsc/notes/app';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const load = (messages: any, Component = App) => {
  render(
    <BrowserRouter>
      <Component />
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
