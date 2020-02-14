import React from 'react';

import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LaunchProps {}

const StyledLaunch = styled.div`
  color: pink;
`;

export const Launch = (props: LaunchProps) => {
  return (
    <StyledLaunch>
      <h1>Welcome to Launch component!</h1>

      <ul>
        <li>
          <Link to="/">Launch root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the Launch root route.</div>}
      />
    </StyledLaunch>
  );
};

export default Launch;
