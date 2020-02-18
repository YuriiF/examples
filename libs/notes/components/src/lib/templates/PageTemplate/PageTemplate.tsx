import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

/** Styled components from emotion are here only for demonstration purpose */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Hero = styled.section``;

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 1100px;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

export interface PageTemplateProps {
  header: any;
  hero?: any;
  footer: any;
  children: any;
}

export const PageTemplate = ({
  header,
  hero,
  children,
  footer,
  ...props
}: PageTemplateProps) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {hero && <Hero>{hero}</Hero>}
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};

export default PageTemplate;
