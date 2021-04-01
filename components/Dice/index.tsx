import React, { useState } from 'react';
import { AccessibleIcon, Button } from 'minorui';
import { DiceOne } from './DiceOne';
import { DiceTwo } from './DiceTwo';
import { DiceThree } from './DiceThree';
import { DiceFour } from './DiceFour';
import { DiceFive } from './DiceFive';
import { DiceSix } from './DiceSix';

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
      kind="ghost"
      onClick={rollDice}
      loading={loading}
      disabled={loading}
      css={{
        p: '$10',
      }}
    >
      <AccessibleIcon.Root label={`Dice with ${value} dot(s)`}>
        <>
          {value === 1 && <DiceOne height="80px" width="80px" />}
          {value === 2 && <DiceTwo height="80px" width="80px" />}
          {value === 3 && <DiceThree height="80px" width="80px" />}
          {value === 4 && <DiceFour height="80px" width="80px" />}
          {value === 5 && <DiceFive height="80px" width="80px" />}
          {value === 6 && <DiceSix height="80px" width="80px" />}
        </>
      </AccessibleIcon.Root>
    </Button>
  );
}
