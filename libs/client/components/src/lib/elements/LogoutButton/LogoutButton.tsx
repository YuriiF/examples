import React from 'react';
import styled from '@emotion/styled';
import { useApolloClient } from '@apollo/react-hooks';
import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg';
import { Button } from 'evergreen-ui';

export interface LogoutButtonProps {}

export const LogoutButton = (props: LogoutButtonProps) => {
  const client = useApolloClient();
  return (
    <Button
      onClick={() => {
        client.writeData({ data: { isLoggedIn: false } });
        localStorage.clear();
      }}
    >
      <ExitIcon />
      Logout
    </Button>
  );
};

export default LogoutButton;
