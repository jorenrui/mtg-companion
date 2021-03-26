import React from 'react';
import { Box, Container, Heading, styled } from 'minorui';
import { Counter } from '@/components/Counter';
import { Dice } from '@/components/Dice';

const TOTAL_PLAYERS = 2;

const Main = styled('main', {});

export default function Home() {
  return (
    <Container>
      <header>
        <Heading size="4xl" css={{ textAlign: 'center', marginBottom: '$300' }}>
          Magic: The Gathering Companion App v0.1.0
        </Heading>
      </header>
      <Main>
        <Box css={{ display: 'flex', justifyContent: 'center', margin: '$100' }}>
          <Dice />
        </Box>
        <Box
          as="main"
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '$100',
          }}
        >
          {[...Array(TOTAL_PLAYERS)].map((_, index) => (
            <Box key={index} css={{ textAlign: 'center' }}>
              <Heading as="h2" size="2xl">
                Player {index + 1}
              </Heading>
              <Counter />
            </Box>
          ))}
        </Box>
      </Main>
    </Container>
  );
}
