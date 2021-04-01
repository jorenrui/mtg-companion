import React, { useState } from 'react';
import {
  Text,
  Box,
  Button,
  Heading,
  Input,
  Label,
} from 'minorui';

import { useStepper } from '@/models/StepperMachine';
import { MIN_PLAYERS, MAX_PLAYERS, usePlayerData } from '@/models/PlayerData';
import { Dice } from '@/components/Dice/index';

export function HomeScreen() {
  const nextStep = useStepper((state) => state.nextStep);
  const setTotalPlayers = usePlayerData((state) => state.setTotalPlayers);

  const [noPlayers, setNoPlayers] = useState<string | number>(MIN_PLAYERS);
  const [error, setError] = useState<string>();

  const startGame = () => {
    const hasError = !isNaN(Number(noPlayers))
      && (noPlayers > MAX_PLAYERS || noPlayers < MIN_PLAYERS);

    if (!hasError) {
      setTotalPlayers(Number(noPlayers));
      nextStep();
    } else {
      setError(`Invalid amount value. Consider inputting from ${MIN_PLAYERS}-${MAX_PLAYERS}.`);
    }
  }

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
      <Box
        css={{
          my: '$200',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Text css={{ mb: '$100' }}>
          Roll the dice to see who goes first (higher or lower):
        </Text>
        <Dice />
        <Label
          id="label-totalPlayers"
          htmlFor="totalPlayers"
          css={{ mt: '$100' }}
        >
          No. of Players:
        </Label>
        <Input
          id="totalPlayers"
          type="number"
          value={noPlayers}
          onChange={(evt) => setNoPlayers(evt.target.value)}
          min={MIN_PLAYERS}
          max={MAX_PLAYERS}
          css={{ width: '$500' }}
        />
        {error && (
          <Box css={{ maxWidth: '$1500', mt: '$20' }}>
            <Text size="sm" color="negative" css={{ wordWrap: 'break-word' }}>
              {error}
            </Text>
          </Box>
        )}
      </Box>
      <Button
        type="button"
        size="md"
        onClick={startGame}
        css={{ px: '$200', py: '$50' }}
      >
        Start Game
      </Button>
    </Box>
  );
}
