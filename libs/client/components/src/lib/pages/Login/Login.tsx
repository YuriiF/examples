import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LoginProps {}

const StyledLogin = styled.div`
  color: pink;
`;

export const Login = (props: LoginProps) => {
  return (
    <StyledLogin>
      <h1>Welcome to Login component!</h1>
    </StyledLogin>
  );
};

export default Login;
