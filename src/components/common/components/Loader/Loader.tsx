import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';
import * as Styled from './Loader.styled';

export const Loader: FC = () => {
  return (
    <Styled.Container>
      <CircularProgress />
    </Styled.Container>
  );
};
