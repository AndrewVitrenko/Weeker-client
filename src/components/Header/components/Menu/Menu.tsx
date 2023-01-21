import React, { FC } from 'react';
import { useMediaQuery } from '@mui/material';

import DesktopMenu from '../DesktopMenu';
import Drawer from '../Drawer';

export const Menu: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <Drawer /> : <DesktopMenu />;
};
