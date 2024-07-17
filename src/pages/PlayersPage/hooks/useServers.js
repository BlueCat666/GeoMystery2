import { useState, useEffect } from 'react';
import { fetchServers } from '../../../services/api';

const useServers = () => {
  const [servers, setServers] = useState({});

  useEffect(() => {
    const getServers = async () => {
      try {
        const data = await fetchServers();
        setServers(data);
      } catch (error) {
        console.error('Error fetching servers:', error);
      }
    };

    getServers(); // Initial fetch

    const interval = setInterval(() => {
      getServers();
    }, 10000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return servers;
};

export default useServers;
