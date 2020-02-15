import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '@bsc/client/components';

/** Example of importing svg files as ReactComponent or URI for <img src={star} /> */
// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';

export const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
