import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PageContainerProps {}

const StyledPageContainer = styled.div`
  color: pink;
`;

export const PageContainer = (props: PageContainerProps) => {
  return (
    <StyledPageContainer>
      <h1>Welcome to PageContainer component!</h1>
    </StyledPageContainer>
  );
};

export default PageContainer;
