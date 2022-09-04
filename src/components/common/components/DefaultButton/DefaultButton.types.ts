import { ColorType, IconsType } from '../../../../interfaces';

export interface IDefaultButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  color?: ColorType;
  endIcon?: IconsType;
  startIcon?: IconsType;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}
