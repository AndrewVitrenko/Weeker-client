import { Box } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;
