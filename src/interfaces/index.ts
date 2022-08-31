import { AlertColor } from '@mui/material';

export interface ITask {
  id: string;
  text: string;
  day: string;
  time: {
    start: string;
    end: string;
  };
  backgroundColor?: string;
}

export interface IWeekerStore {
  tasks: ITask[];
  focusedTime: string | null;
  currentWeek: {
    start: string;
    end: string;
  };
}

export interface IAuthStore {
  token: string;
}

export type ColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export type IconsType =
  | 'delete'
  | 'save'
  | 'cancel'
  | 'clear'
  | 'send'
  | 'show'
  | 'hide';

export type ComponentIcons = {
  [key in IconsType]: React.ReactNode;
};

export interface IToastStore {
  status: AlertColor;
  message: string;
  open: boolean;
}
