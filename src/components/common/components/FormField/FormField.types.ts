import { IconsType } from '../../../../interfaces';

export interface IFormFieldProps {
  label?: string;
  placeholder?: string;
  name: string;
  variant?: 'outlined' | 'filled';
  required?: boolean;
  type?: 'email' | 'text' | 'password';
  disabled?: boolean;
  startIcon?: IconsType;
  endIcon?: IconsType;
}
