import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Pane, Button, TextInputField } from 'evergreen-ui';
import { unit, colors } from '../../themes/GlobalStyles/Global';

const StyledForm = styled('form')({
  width: '100%',
  maxWidth: 406,
  padding: unit * 3.5,
  borderRadius: 4,
  color: colors.text,
  backgroundColor: 'white',
  boxShadow:
    'inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 1px 2px rgba(67, 90, 111, 0.14)',
});

export interface LoginFormProps {
  login: any;
}

export const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = (event.target as HTMLInputElement).value;
    setEmail(email);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.login({ variables: { email } });
  };

  return (
    <Pane marginTop="default">
      <StyledForm onSubmit={onSubmit}>
        <TextInputField
          // onChange={(e) => setState({ value: e.target.value })}
          onChange={onChange}
          label={'Provide valid email address'}
          required
          type="email"
          name="email"
          placeholder="E-Mail"
          data-testid="login-input"
        />
        <Button marginRight={16} type="submit">
          Log in
        </Button>
      </StyledForm>
    </Pane>
  );
};

export default LoginForm;
