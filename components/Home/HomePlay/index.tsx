import React from 'react';
import { Box, Button, Heading } from 'minorui';
import { usePlayerData } from '@/models/PlayerData';
import { Counter } from '@/components/Counter';

export function HomePlay() {
  const [players, setPlayers, reset] = usePlayerData((state) => [
    state.players,
    state.setPlayers,
    state.reset,
  ]);

  return (
    <Box css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box css={{ mb: '$200' }}>
        <Button
          type="button"
          size="md"
          kind="tertiary"
          onClick={reset}
          css={{ px: '$200', py: '$50' }}
        >
          New Game
        </Button>
      </Box>
      <Box
        css={{
          m: '$100',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '$100',

          '@downSm': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        {players.map((player) => (
          <Box
            key={player.id}
            css={{
              textAlign: 'center',
            }}
          >
            <Heading as="h2" size="2xl">
              {player.name}
            </Heading>
            <Counter
              player={player}
              setPlayers={setPlayers}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
