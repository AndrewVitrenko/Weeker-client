import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { ROUTES } from 'src/constants';
import { logout } from 'src/store/reducers';

import * as Styled from '../../Header.styled';

export const DesktopMenu: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Button
        color="inherit"
        startIcon={<LogoutIcon />}
        component={Styled.NavLink}
        onClick={handleLogout}
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
