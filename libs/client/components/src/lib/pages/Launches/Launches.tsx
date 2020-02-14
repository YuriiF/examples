import React from 'react';

import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LaunchesProps {}

const StyledLaunches = styled.div`
  color: pink;
`;

export const Launches = (props: LaunchesProps) => {
  return (
    <StyledLaunches>
      <h1>Welcome to Launches component!</h1>

      <ul>
        <li>
          <Link to="/">Launches root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the Launches root route.</div>}
      />
    </StyledLaunches>
  );
};

export default Launches;
