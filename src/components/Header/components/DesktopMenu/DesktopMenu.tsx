import React, { FC } from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as Styled from '../../Header.styled';
import { ROUTES } from 'src/constants';

export const DesktopMenu: FC = () => {
  return (
    <>
      <Button
        color="inherit"
        startIcon={<LogoutIcon />}
        component={Styled.NavLink}
        to={ROUTES.LOGIN}
      >
        log out
      </Button>
      <Button
        color="inherit"
        startIcon={<AddCircleOutlineIcon />}
        component={Styled.NavLink}
        to={ROUTES.SIGNUP}
      >
        Sign up
      </Button>
    </>
  );
};
