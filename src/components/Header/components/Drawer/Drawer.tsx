import React, { FC, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  SwipeableDrawer,
  IconButton,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as Styled from '../../Header.styled';
import { ROUTES } from 'src/constants';

const drawerWidth = 320;

export const Drawer: FC = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

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
