import React, { useState } from 'react';
import { Box, Button, Input, styled, Text } from 'minorui';

const STARTING_LIFE = 20;

const StyledButton = styled(Button, {
  color: '$primary',
  border: '1px solid $colors$primary',
  backgroundColor: 'white',

  '&:hover, &:focus': {
    color: 'white',
    backgroundColor: '$primary',
  },
})

export function Counter() {
  const [life, setLife] = useState(STARTING_LIFE);
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState<string>();

  const hasError = amount > STARTING_LIFE
    || amount < 1;

  const handleAmountChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(evt.target.valueAsNumber);
  };

  const addLife = () => {
    setError(undefined);

    if (!hasError) {
      setLife((prevLife) => prevLife + amount);
    } else {
      setError('Invalid amount value. Considering inputting from 1-20.');
    }
  };

  const subtractLife = () => {
    setError(undefined);

    if (!hasError) {
      setLife((prevLife) => prevLife - amount);
    } else {
      setError('Invalid amount value. Considering inputting from 1-20.');
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
        {life}
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
      <Box css={{ margin: '$100', display: 'flex', gap: '$100' }}>
        <StyledButton
          type="button"
          onClick={addLife}
        >
          + Add
        </StyledButton>
        <StyledButton
          type="button"
          onClick={subtractLife}
        >
          - Subtract
        </StyledButton>
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
