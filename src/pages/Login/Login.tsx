import React, { FC } from 'react';
import LoginForm from 'src/components/LoginForm';

import * as Styled from './Login.styled';

export const Login: FC = () => {
  return (
    <Styled.Container>
      <Styled.Heading variant="h5">
        Log in the system to use all features
      </Styled.Heading>
      <LoginForm />
    </Styled.Container>
  );
};
