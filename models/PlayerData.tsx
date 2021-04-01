import { useEffect, useState } from 'react';
import createStore from 'context-model';

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 6;
export const STARTING_LIFE = 20;

export interface IPlayer {
  id: number;
  name: string;
  life: number;
}

export const PlayerData = createStore(() => {
  const [totalPlayers, setTotalPlayers] = useState(MIN_PLAYERS);
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

  useEffect(() => {
    setPlayers([...Array(totalPlayers)].map((_, index) => ({
      id: index + 1,
      name: `Player ${index + 1}`,
      life: STARTING_LIFE,
    })));
  }, [totalPlayers]);

  return {
    players,
    setPlayers,
    totalPlayers,
    setTotalPlayers,
    reset,
  };
}, {
  displayName: 'Models.PlayerData',
});

export const usePlayerData = PlayerData.useSelector;
