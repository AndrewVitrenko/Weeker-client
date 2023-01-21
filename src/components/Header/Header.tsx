import React, { FC } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { ROUTES } from 'src/constants';

import Menu from './components/Menu';
import * as Styled from './Header.styled';

export const Header: FC = () => {
  return (
    <Styled.Container>
      <AppBar position="static">
        <Toolbar>
          <Styled.Title variant="h6">
            <Styled.NavLink to={ROUTES.HOME}>Greeting in Weeker</Styled.NavLink>
          </Styled.Title>
          <Menu />
        </Toolbar>
      </AppBar>
    </Styled.Container>
  );
};
