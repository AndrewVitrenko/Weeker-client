import React, { FC } from 'react';
import { Button } from '@mui/material';
import { IDefaultButtonProps } from './DefaultButton.types';
import { COMPONENT_ICONS } from '../../../../constants';

export const DefaultButton: FC<IDefaultButtonProps> = ({
  variant = 'contained',
  size = 'medium',
  onClick,
  text,
  startIcon,
  endIcon,
  color = 'primary',
  disabled = false,
  type,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      color={color}
      startIcon={startIcon && COMPONENT_ICONS[startIcon]}
      endIcon={endIcon && COMPONENT_ICONS[endIcon]}
      type={type}
    >
      {text}
    </Button>
  );
};
