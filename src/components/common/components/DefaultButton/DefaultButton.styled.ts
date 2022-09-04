import styled from 'styled-components';
import { Box, CircularProgress } from '@mui/material';

export const Container = styled(Box)`
  position: relative;
`;

export const Loader = styled(CircularProgress)`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -12px;
  margin-left: -12px;
`;
