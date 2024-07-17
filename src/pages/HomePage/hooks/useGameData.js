import { useState, useEffect } from 'react';
import { fetchGameData } from '../../../services/api';

const useGameData = () => {
  const [gameData, setgameData] = useState({});

  useEffect(() => {
    const getgameData = async () => {
      try {
        const data = await fetchGameData();
        setgameData(data);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    getgameData(); // Initial fetch

    const interval = setInterval(() => {
        getgameData();
    }, 10000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return gameData;
};

export default useGameData;
