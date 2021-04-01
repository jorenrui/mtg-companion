import React, { useState } from 'react';
import { Box, Button, Input, Text } from 'minorui';
import { IPlayer, STARTING_LIFE } from '@/models/PlayerData';

interface IProps {
  player: IPlayer;
  setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>
}

export function Counter({
  player,
  setPlayers,
}: IProps) {
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState<string>();

  const hasError = amount > STARTING_LIFE
    || amount < 1
    || isNaN(Number(amount));

  const handleAmountChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(evt.target.valueAsNumber);
  };

  const addLife = () => {
    setError(undefined);

    if (!hasError) {
      setPlayers((prevPlayers) => prevPlayers.map((curPlayer) => ({
        ...curPlayer,
        life: curPlayer.id === player.id
          ? curPlayer.life + amount
          : curPlayer.life,
      })));
    } else {
      setError('Invalid amount value. Consider inputting from 1-20.');
    }
  };

  const subtractLife = () => {
    setError(undefined);

    if (!hasError) {
      setPlayers((prevPlayers) => prevPlayers.map((curPlayer) => ({
        ...curPlayer,
        life: curPlayer.id === player.id
          ? curPlayer.life - amount
          : curPlayer.life,
      })));
    } else {
      setError('Invalid amount value. Consider inputting from 1-20.');
    }
  };

  return (
    <Box
      css={{
        margin: '$200 0',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }>
      <Text size="5xl" css={{ fontWeight: 700, marginBottom: '$200' }}>
        {player.life}
      </Text>
      <Input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        min={1}
        max={STARTING_LIFE}
        css={{
          width: '$500',
        }}
      />
      <Box css={{ margin: '$100', display: 'flex', fgap: '$100' }}>
        <Button
          type="button"
          kind="secondary"
          onClick={addLife}
        >
          + Add
        </Button>
        <Button
          type="button"
          kind="secondary"
          onClick={subtractLife}
        >
          - Subtract
        </Button>
      </Box>
      {error && (
        <Box css={{ maxWidth: '$1500' }}>
          <Text size="sm" color="negative" css={{ wordWrap: 'break-word' }}>
            {error}
          </Text>
        </Box>
      )}
    </Box>
  );
}
