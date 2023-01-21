import { TextFieldProps } from '@mui/material';
import { IconsType } from 'src/interfaces';

export type IFormFieldProps = TextFieldProps & {
  name: string;
  startIcon?: IconsType;
  endIcon?: IconsType;
};
