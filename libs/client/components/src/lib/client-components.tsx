import React from 'react';

import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ClientComponentsProps {}

const StyledClientComponents = styled.div`
  color: pink;
`;

export const ClientComponents = (props: ClientComponentsProps) => {
  return (
    <StyledClientComponents>
      <h1>Welcome to client-components component!</h1>

      <ul>
        <li>
          <Link to="/">client-components root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the client-components root route.</div>}
      />
    </StyledClientComponents>
  );
};

export default ClientComponents;
