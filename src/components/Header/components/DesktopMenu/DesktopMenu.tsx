import React, { FC } from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as Styled from '../../Header.styled';
import { ROUTES } from '../../../../constants';

export const DesktopMenu: FC = () => {
  return (
    <>
      <Button color="inherit" startIcon={<LogoutIcon />}>
        <Styled.NavLink to={ROUTES.LOGIN}>log out</Styled.NavLink>
      </Button>
      <Button color="inherit" startIcon={<AddCircleOutlineIcon />}>
        <Styled.NavLink to={ROUTES.SIGNUP}>Sign up</Styled.NavLink>
      </Button>
    </>
  );
};
