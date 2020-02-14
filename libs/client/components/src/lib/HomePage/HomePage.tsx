import React from 'react';

import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

export interface HomePageProps {}

const StyledHomePage = styled.div`
  color: pink;
`;

export const HomePage = (props: HomePageProps) => {
  return (
    <StyledHomePage>
      <h1>Welcome to HomePage component!</h1>

      <ul>
        <li>
          <Link to="/">HomePage root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the HomePage root route.</div>}
      />
    </StyledHomePage>
  );
};

export default HomePage;
