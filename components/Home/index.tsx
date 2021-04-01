import React from 'react';
import { Box, Button, Container, styled } from 'minorui';
import { useStepper } from '@/models/StepperMachine';
import { HomeScreen } from './HomeScreen';
import { HomePlay } from './HomePlay';

const Main = styled('main', {
  p: '$100',
});

export function Home() {
  const [step, nextStep] = useStepper((state) => [
    state.step,
    state.nextStep,
  ]);

  return (
    <Container>
      <Main>
        <Box
          css={{
            height: '100%',
            minHeight: 'calc(100vh - 100px)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {step.matches('screen') && <HomeScreen />}
          {step.matches('play') && <HomePlay />}
        </Box>
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="button"
            size="sm"
            kind="secondary"
            onClick={nextStep}
            disabled={step.matches('screen')}
          >
            Return
          </Button>
          <Button
            type="button"
            size="sm"
            kind="secondary"
            onClick={nextStep}
            disabled={step.matches('play')}
          >
            Next
          </Button>
        </Box>
      </Main>
    </Container>
  );
}
