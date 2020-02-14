import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'evergreen-ui';

const StyledLoadMoreButton = styled.div`
  color: pink;
`;

export const LoadMoreButton = (props: any) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};

export default LoadMoreButton;
