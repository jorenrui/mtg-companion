import React from 'react';
import { Box, Heading, styled } from 'minorui';
import { Counter } from '@/components/Counter';

const TOTAL_PLAYERS = 2;

const Main = styled('main', {});

export function HomePlay() {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        m: '$100',

        '@downSm': {
          flexDirection: 'column',
        },
      }}
    >
      {[...Array(TOTAL_PLAYERS)].map((_, index) => (
        <Box
          key={index}
          css={{
            textAlign: 'center',
          }}
        >
          <Heading as="h2" size="2xl">
            Player {index + 1}
          </Heading>
          <Counter />
        </Box>
      ))}
    </Box>
  );
}
