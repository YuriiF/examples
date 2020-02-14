import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  color: pink;
`;

export const Footer = (props: FooterProps) => {
  return (
    <StyledFooter>
      <h1>Welcome to Footer component!</h1>
    </StyledFooter>
  );
};

export default Footer;
