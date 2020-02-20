/**
 *
 * App Component
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import { Pane } from 'evergreen-ui';

/** Custom imports */
import {
  HomePageLoadable,
  NotFoundPage,
  GlobalStyles,
} from '@bsc/notes/components';

import { NotesList } from '../NotesList/NotesList';
import { CreateNote } from '../CreateNote/CreateNote';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

export const App = () => {
  return (
    <Pane
      marginLeft="auto"
      marginRight="auto"
      paddingX="120px"
      width="1024px"
      minHeight="100%"
      display="flex"
      flexDirection="column"
    >
      <Helmet
        titleTemplate="%s - BSC Notes Example"
        defaultTitle="BSC Notes Example"
      >
        <meta name="description" content="BSC Notes Example Application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={NotesList} />
        <Route path="/create-note" component={CreateNote} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyles />
    </Pane>
  );
};

export default App;
