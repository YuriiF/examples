import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MenuItemProps {}

const StyledMenuItem = styled.div`
  color: pink;
`;

export const MenuItem = (props: MenuItemProps) => {
  return (
    <StyledMenuItem>
      <h1>Welcome to MenuItem component!</h1>
    </StyledMenuItem>
  );
};

export default MenuItem;
