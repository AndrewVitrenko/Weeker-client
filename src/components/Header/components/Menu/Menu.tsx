import React, { FC } from 'react';
import { useMediaQuery } from '@mui/material';
import Drawer from '../Drawer';
import DesktopMenu from '../DesktopMenu';

export const Menu: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <Drawer /> : <DesktopMenu />;
};
