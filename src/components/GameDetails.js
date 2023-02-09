import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import {
  StyledGameDetails,
  StyledHero,
  StyledInnerWrapper,
  StyledContent,
  StyledDescription,
} from './styles/GameDetails.styled';

const initialGame = {
  id: null,
  name: '',
  website: '',
  released: '',
  platforms: [],
  genres: [],
  description: '',
  bgImg: '',
  bgImgExtra: '',
  esrbRating: '',
  screenshots: [],
};

const GameDetails = () => {
  const [game, setGame] = useState({ ...initialGame });
  const location = useLocation();
  const { selectedGame } = location.state;

  useEffect(() => {
    const getGameDetails = async (id) => {
      const stringId = id.toString();
      const apiResponse = await axios.get('http://localhost:4000/games', {
        params: {
          id: stringId,
        },
      });
      const data = apiResponse.data;
      console.log(data);

      setGame({
        id: data.id,
        name: data.name,
        website: data.website ? data.website : '---',
        released: data.released,
        platforms: [...data.platforms],
        genres: data.genres ? [...data.genres] : [],
        description: data.description,
        bgImg: data.background_image,
        bgImgExtra: data.background_image_additional
          ? data.background_image_additional
          : null,
        esrbRating: data.esrb_rating ? data.esrb_rating.name : '---',
        screenshots: [...selectedGame.short_screenshots],
      });
    };

    if (selectedGame.id !== game.id) {
      getGameDetails(selectedGame.id);
    }
  }, []);

  return (
    <StyledGameDetails>
      <StyledHero imgUrl={game.bgImg}>
        <div className="content">
          <div className="heroImage" />
        </div>
      </StyledHero>
      <StyledInnerWrapper>
        <StyledContent>
          <h2>{game.name}</h2>
          <h3>Website</h3>
          <a href={game.website} target="_blank" rel="noreferrer">
            {game.website}
          </a>
          <h3>Released</h3>
          <span>{game.released}</span>
          <h3>Available on</h3>
          {game.platforms.map(({ platform }) => (
            <span key={platform.id}>{platform.name}</span>
          ))}
          <h3>Genres</h3>
          {game.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
          <h3>ESRB Rating</h3>
          <span>{game.esrbRating}</span>
          <section>
            <StyledDescription>
              <h3>About</h3>
              <div
                className="innerContainer"
                dangerouslySetInnerHTML={{ __html: game.description }}
              ></div>
            </StyledDescription>
          </section>
          <Carousel name={game.name} screenshots={game.screenshots} />
        </StyledContent>
      </StyledInnerWrapper>
    </StyledGameDetails>
  );
};

export default GameDetails;
