import { useState } from 'react';
import createStore from 'context-model';

export const MIN_PLAYERS = 2;
export const STARTING_LIFE = 20;

export interface IPlayer {
  id: number;
  name: string;
  life: number;
}

interface IProps {
  totalPlayers?: number;
}

export const PlayerData = createStore(({ totalPlayers = MIN_PLAYERS }: IProps) => {
  const [players, setPlayers] = useState([...Array(totalPlayers)].map((_, index) => ({
    id: index + 1,
    name: `Player ${index + 1}`,
    life: STARTING_LIFE,
  })));

  const reset = () => {
    setPlayers((state) => state.map((curPlayer) => ({
      ...curPlayer,
      life: STARTING_LIFE,
    })));
  };

  return {
    players,
    setPlayers,
    reset
  };
}, {
  displayName: 'Models.PlayerData',
});

export const usePlayerData = PlayerData.useSelector;
