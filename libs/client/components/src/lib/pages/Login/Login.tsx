import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Loading } from '../../elements/Loading/Loading';
import { LoginForm } from '../../sections/LoginForm/LoginForm';

export interface LoginProps {}

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email)
  }
`;

export const Login = (props: LoginProps) => {
  const onCompleted = ({ login }) => {
    localStorage.setItem('token', login);
    client.writeData({ data: { isLoggedIn: true } });
  };

  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN_USER, { onCompleted });

  if (loading) {
  }

  if (error) {
    return <p>An error occurred</p>;
  }

  return <LoginForm login={login} />;
};

export default Login;
