import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  width: 100%;
  img {
    max-width: 100%;
  }
`;

const GameDetails = () => {
  const location = useLocation();
  const { selectedGame } = location.state;

  return (
    <div className="container">
      <div className="content">
        <h2>Game Details</h2>
        <StyledImageContainer>
          <img
            src={selectedGame.background_image}
            alt={`${selectedGame.name}`}
          />
        </StyledImageContainer>
      </div>
    </div>
  );
};

export default GameDetails;
