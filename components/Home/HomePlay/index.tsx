import React from 'react';
import { Box, Heading } from 'minorui';
import { usePlayerData } from '@/models/PlayerData';
import { Counter } from '@/components/Counter';

export function HomePlay() {
  const [players, setPlayers] = usePlayerData((state) => [
    state.players,
    state.setPlayers,
  ]);

  return (
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
  );
}
