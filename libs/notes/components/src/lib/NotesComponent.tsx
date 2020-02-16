import React from 'react';

import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface NotesComponentProps {}

const StyledNotesComponent = styled.div`
  color: pink;
`;

export const NotesComponent = (props: NotesComponentProps) => {
  return (
    <StyledNotesComponent>
      <h1>Welcome to notes-components component!</h1>

      <ul>
        <li>
          <Link to="/">notes-components root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the notes-components root route.</div>}
      />
    </StyledNotesComponent>
  );
};

export default NotesComponent;
