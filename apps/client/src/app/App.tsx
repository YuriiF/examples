import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { ClientComponents } from '@bsc/client/components';

/** Example of importing svg files as ReactComponent or URI for <img src={star} /> */
// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';

const StyledApp = styled.div``;

export const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <header className="flex">
          {/* <Logo width="75" height="75" /> */}
          <h1>Welcome to client!</h1>
        </header>

        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/components">ClientComponents</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          )}
        />
        <Route path="/components" component={ClientComponents} />
        <Route
          path="/page-2"
          exact
          render={() => (
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          )}
        />
        {/* END: routes */}
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
