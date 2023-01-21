import React, { FC } from 'react';
import { Button } from '@mui/material';
import { COMPONENT_ICONS } from 'src/constants';

import * as Styled from './DefaultButton.styled';
import { IDefaultButtonProps } from './DefaultButton.types';

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
  loading = false,
}) => {
  return (
    <Styled.Container>
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
      {loading && <Styled.Loader size={24} />}
    </Styled.Container>
  );
};
