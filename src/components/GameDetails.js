import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import {
  StyledGameDetails,
  StyledContent,
  StyledHero,
} from './styles/GameDetails.styled';

const initialGame = {
  name: '',
  released: '',
  platforms: [],
  genres: [],
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
        released: selectedGame.released,
        platforms: [...selectedGame.platforms],
        genres: selectedGame.genres ? [...selectedGame.genres] : [],
        bgImg: selectedGame.background_image,
        esrbRating: selectedGame.esrb_rating
          ? selectedGame.esrb_rating.name
          : '---',
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
        <h3>Released</h3>
        <span>{game.released}</span>
        <br />
        <h3>Available on</h3>
        {game.platforms.map(({ platform }) => (
          <span key={platform.id}>{platform.name}</span>
        ))}
        <h3>Genres</h3>
        {game.genres.map((genre) => (
          <>
            <span key={genre.id}>{genre.name}</span>
            <br />
          </>
        ))}
        <br />
        <h3>ESRB Rating</h3>
        <span>{game.esrbRating}</span>
        <br />
        <br />
        <Carousel name={game.name} screenshots={game.screenshots} />
      </StyledContent>
    </StyledGameDetails>
  );
};

export default GameDetails;
