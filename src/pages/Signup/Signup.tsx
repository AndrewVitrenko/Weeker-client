import React, { FC } from 'react';
import * as Styled from './Signup.styled';
import SignupForm from '../../components/SignupForm';

export const Signup: FC = () => {
  return (
    <Styled.Container>
      <Styled.Heading variant="h5">Register to use all features</Styled.Heading>
      <SignupForm />
    </Styled.Container>
  );
};
