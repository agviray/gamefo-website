import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledGameDetails,
  StyledContent,
  StyledHero,
} from './styles/GameDetails.styled';

const initialGame = {
  name: '',
  bgImg: '',
  esrbRating: '',
  screenshots: [],
};

const GameDetails = () => {
  const [game, setGame] = useState({ ...initialGame });
  const location = useLocation();
  const { selectedGame } = location.state;

  useEffect(() => {
    if (Object.keys(game).length !== 0) {
      setGame({
        name: selectedGame.name,
        bgImg: selectedGame.background_image,
        esrbRating: selectedGame.esrb_rating.name_en,
        screenshots: [...selectedGame.short_screenshots],
      });
    }
  }, [selectedGame]);

  return (
    <StyledGameDetails>
      <StyledHero>
        <div className="content">
          <img src={game.bgImg} alt={`${game.name}`} />
        </div>
      </StyledHero>
      <StyledContent>
        <h2>{game.name}</h2>
        <br />
        <h3>ESRB Rating</h3>
        <span>{game.esrbRating}</span>
        <br />
        <br />
        {game.screenshots.map((img, index) => (
          <div key={img.id}>
            <img src={img.image} alt={`${game.name} screenshot ${index}`} />
          </div>
        ))}
      </StyledContent>
    </StyledGameDetails>
  );
};

export default GameDetails;
