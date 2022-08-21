import React, { FC } from 'react';
import { useField } from 'formik';
import { InputAdornment } from '@mui/material';
import { IFormFieldProps } from './FormField.types';
import * as Styled from './FormField.styled';
import { COMPONENT_ICONS } from '../../../../constants';

export const FormField: FC<IFormFieldProps> = ({
  label,
  name = '',
  placeholder,
  variant = 'outlined',
  disabled = false,
  required = false,
  type = 'text',
  startIcon,
  endIcon,
}) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] =
    useField<string>(name);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setValue(e.target.value);
  };

  return (
    <Styled.Input
      value={value}
      variant={variant}
      name={name}
      placeholder={placeholder}
      label={label}
      onChange={onChange}
      error={touched && !!error}
      disabled={disabled}
      type={type}
      required={required}
      helperText={touched && error}
      InputProps={{
        startAdornment: startIcon && (
          <InputAdornment position="start">
            {COMPONENT_ICONS[startIcon]}
          </InputAdornment>
        ),
        endAdornment: endIcon && (
          <InputAdornment position="end">
            {COMPONENT_ICONS[endIcon]}
          </InputAdornment>
        ),
      }}
    />
  );
};
