import React, { FC } from 'react';
import SignupForm from 'src/components/SignupForm';

import * as Styled from './Signup.styled';

export const Signup: FC = () => {
  return (
    <Styled.Container>
      <Styled.Heading variant="h5">Register to use all features</Styled.Heading>
      <SignupForm />
    </Styled.Container>
  );
};
