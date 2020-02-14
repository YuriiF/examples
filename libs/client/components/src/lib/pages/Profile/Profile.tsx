import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ProfileProps {}

const StyledProfile = styled.div`
  color: pink;
`;

export const Profile = (props: ProfileProps) => {
  return (
    <StyledProfile>
      <h1>Welcome to Profile component!</h1>
    </StyledProfile>
  );
};

export default Profile;
