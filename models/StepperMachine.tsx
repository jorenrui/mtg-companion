import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import createStore from 'context-model';

const stepperMachine = Machine({
  id: 'stepper',
  initial: 'screen',
  states: {
    screen: {
      on: { NEXT: 'play' },
    },
    play: {
      on: { NEXT: 'screen' },
    },
  },
});

export const Stepper = createStore(() => {
  const [step, send] = useMachine(stepperMachine);

  const nextStep = () => send('NEXT');

  return {
    step,
    nextStep,
  };
}, {
  displayName: 'Models.Stepper',
});

export const useStepper = Stepper.useSelector;
