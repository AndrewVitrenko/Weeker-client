import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Snackbar } from '@mui/material';
import { useAppSelector } from 'src/hooks';
import { hideToast } from 'src/store/reducers';

import { AUTO_CLOSE_TIMEOUT } from './constants';

export const Toast: FC = () => {
  const { open, message, status } = useAppSelector(state => state.toast);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideToast());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={AUTO_CLOSE_TIMEOUT}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert severity={status} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};
