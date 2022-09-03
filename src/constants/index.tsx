import React from 'react';
import {
  Delete,
  Save,
  Cancel,
  Send,
  RestartAlt,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { ComponentIcons } from '../interfaces';

export const COMPONENT_ICONS: ComponentIcons = {
  delete: <Delete />,
  save: <Save />,
  cancel: <Cancel />,
  clear: <RestartAlt />,
  send: <Send />,
  show: <Visibility />,
  hide: <VisibilityOff />,
};

export enum LOCAL_STORAGE_KEYS {
  TOKEN = 'WEEKER_TOKEN',
}

export enum ROUTES {
  HOME = '/',
  LOGIN = '/login',
  SIGNUP = '/signup',
}

export enum REQUEST_ERRORS {
  NETWORK_ERROR = 'Network error, please check your internet',
}
