import React, { useState } from 'react';
import { Box, Text } from 'minorui';

const STARTING_LIFE = 10;

export function Counter() {
  const [life, setLife] = useState(STARTING_LIFE);

  return (
    <Box css={{ textAlign: 'center', paddingTop: '$200' }}>
      <Text size="5xl" css={{ fontWeight: 700 }}>
        {life}
      </Text>
    </Box>
  );
}
