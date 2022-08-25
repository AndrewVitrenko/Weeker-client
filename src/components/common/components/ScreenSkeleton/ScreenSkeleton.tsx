import React, { FC } from 'react';
import * as Styled from './ScreenSkeleton.styled';

export const ScreenSkeleton: FC = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
};
