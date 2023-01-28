import React from 'react';
import { useLocation } from 'react-router-dom';

const GameDetails = () => {
  const location = useLocation();
  const { selectedGame } = location.state;
  console.log(selectedGame);
  return (
    <div className="container">
      <div className="content">
        <h2>Game Details</h2>
        <img src={selectedGame.background_image} alt={`${selectedGame.name}`} />
      </div>
    </div>
  );
};

export default GameDetails;
