import React from 'react';
import { Home } from '@/components/Home';
import { Stepper } from '@/models/StepperMachine';

export default function HomePage() {
  return (
    <Stepper.Provider>
      <Home />
    </Stepper.Provider>
  );
}
