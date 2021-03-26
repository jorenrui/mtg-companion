import React from 'react';
import { styled } from 'minorui';

export const Container = styled('div', {
  boxSizing: 'border-box',
  width: '100%',
  height: '100vh',
});

interface IProps {
  children: React.ReactNode;
}

export function Page({ children }: IProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
