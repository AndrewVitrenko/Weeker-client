import styled from 'styled-components';
import { Box } from '@mui/material';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ButtonWrapper = styled(Box)`
  margin-top: 0.5rem;
`;
