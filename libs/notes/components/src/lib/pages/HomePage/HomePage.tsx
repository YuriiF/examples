import React from 'react';
import styled from '@emotion/styled';
import { Heading } from 'evergreen-ui';

export interface HomePageProps {
  children: any;
}

const Wrapper = styled.div``;

export const HomePage = ({ children }: HomePageProps) => {
  return (
    <Wrapper>
      <Heading is="h1" size={800} color="pink" textAlign="center">
        Welcome to Notes HomePage!
      </Heading>
      {children}
    </Wrapper>
  );
};

export default HomePage;
