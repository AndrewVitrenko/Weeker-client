import React, { FC } from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as Styled from '../../Header.styled';

export const DesktopMenu: FC = () => {
  return (
    <>
      <Button color="inherit" startIcon={<LogoutIcon />}>
        <Styled.NavLink to="/login">log out</Styled.NavLink>
      </Button>
      <Button color="inherit" startIcon={<AddCircleOutlineIcon />}>
        <Styled.NavLink to="/signup">Sign up</Styled.NavLink>
      </Button>
    </>
  );
};
