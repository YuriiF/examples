import React from 'react';
import { Button } from 'evergreen-ui';

export const LoadMoreButton = (props: any) => {
  const { children, isLoading, ...rest } = props;
  return (
    <Button isLoading={isLoading} {...rest}>
      {children}
    </Button>
  );
};

export default LoadMoreButton;
