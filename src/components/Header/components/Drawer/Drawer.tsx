import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
} from '@mui/material';
import { ROUTES } from 'src/constants';
import { logout } from 'src/store/reducers';

import * as Styled from '../../Header.styled';

const drawerWidth = 320;

export const Drawer: FC = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <IconButton color="inherit" onClick={openDrawer}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={open}
        anchor="right"
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        <IconButton
          sx={{ marginRight: 'auto', paddingTop: '16px', paddingLeft: '16px' }}
          onClick={closeDrawer}
        >
          <ChevronRightIcon />
        </IconButton>
        <Box
          sx={{ width: drawerWidth }}
          role="presentation"
          onClick={closeDrawer}
        >
          <List>
            <ListItem>
              <Button
                color="inherit"
                startIcon={<LogoutIcon />}
                component={Styled.NavLink}
                to={ROUTES.LOGIN}
                onClick={handleLogout}
              >
                log out
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="inherit"
                startIcon={<AddCircleOutlineIcon />}
                component={Styled.NavLink}
                to={ROUTES.SIGNUP}
              >
                sign up
              </Button>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};
