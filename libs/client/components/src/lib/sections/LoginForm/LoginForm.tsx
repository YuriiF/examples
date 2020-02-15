import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Pane, Button, TextInputField } from 'evergreen-ui';

export interface LoginFormProps {
  login: any;
}

export const LoginForm = (props: LoginFormProps) => {
  console.log('[TLOG]: LoginForm -> props', props);

  return (
    <Pane marginTop="default">
      <TextInputField
        // onChange={(e) => setState({ value: e.target.value })}
        onChange={(e) => console.log(e.target.value)}
        // value={state.value}
      />
      <Button marginRight={16}>Login</Button>
    </Pane>
  );
};

export default LoginForm;
