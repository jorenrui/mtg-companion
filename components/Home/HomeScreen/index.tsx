import React from 'react';
import {
  Text,
  Box,
  Button,
  Heading,
} from 'minorui';

import { Dice } from '@/components/Dice/index';
import { useStepper } from '@/models/StepperMachine';

export function HomeScreen() {
  const nextStep = useStepper((state) => state.nextStep);

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Heading size="4xl">
        Magic: The Gathering Companion App
        <br />
        v0.1.0
      </Heading>
      <Box css={{ my: '$200' }}>
        <Text css={{ mb: '$100' }}>
          Roll the dice to see who goes first (higher or lower):
        </Text>
        <Dice />
      </Box>
      <Button
        type="button"
        size="md"
        onClick={nextStep}
        css={{ px: '$200', py: '$50' }}
      >
        Start Game
      </Button>
    </Box>
  );
}
