
import React, { useState, useEffect } from 'react';
import { getAllTrains } from './api'; // Import your API functions

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
    getAllTrains()
      .then((data) => setTrains(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>{train.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
