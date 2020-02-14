import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { unit, colors } from '../../themes/GlobalStyles/Global';

export interface PageContainerProps {
  children: any;
}

const Bar = styled('div')({
  flexShrink: 0,
  height: 12,
  backgroundColor: colors.primary,
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
  padding: unit * 3,
  paddingBottom: unit * 5,
});

export const PageContainer = (props: PageContainerProps) => {
  const { children } = props;
  return (
    <Fragment>
      <Bar />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default PageContainer;
