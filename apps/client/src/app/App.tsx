import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { HomePage } from '@bsc/client/components';

/** Example of importing svg files as ReactComponent or URI for <img src={star} /> */
// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';

const StyledApp = styled.div``;

export const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
