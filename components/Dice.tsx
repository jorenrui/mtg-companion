import React, { useState } from 'react';
import { Button } from 'minorui';

const START_RANGE = 1;
const MAX_DICE_VALUE = 6;

const getRandomValue = () => Math.floor(Math.random() * MAX_DICE_VALUE) + START_RANGE;

export function Dice() {
  const [value, setValue] = useState(getRandomValue());
  const [loading, setLoading] = useState(false);

  const rollDice = () => {
    setLoading(true);
    setValue(getRandomValue());
    setLoading(false);
  };

  return (
    <Button
      type="button"
      onClick={rollDice}
      loading={loading}
      disabled={loading}
      css={{
        textAlign: 'center',
        padding: '$50 $150',
      }}
    >
      Dice: {value}
    </Button>
  );
}
