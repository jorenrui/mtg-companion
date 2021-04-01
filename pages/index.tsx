import React from 'react';
import { Home } from '@/components/Home';
import { Stepper } from '@/models/StepperMachine';
import { PlayerData } from '@/models/PlayerData';

export default function HomePage() {
  return (
    <Stepper.Provider>
      <PlayerData.Provider>
        <Home />
      </PlayerData.Provider>
    </Stepper.Provider>
  );
}
