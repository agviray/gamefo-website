import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import {
  StyledGameDetails,
  StyledHero,
  StyledInnerContainer,
  StyledDetails,
  StyledDescription,
  StyledScreenshots,
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
      <section>
        <StyledHero imgUrl={game.bgImg}>
          <div className="content">
            <div className="heroImage" />
          </div>
        </StyledHero>
      </section>
      <section>
        <StyledInnerContainer>
          <section>
            <article>
              <h2 className="name">{game.name}</h2>
              <StyledDetails>
                <div className="innerContainer">
                  <h3>Website</h3>
                  <a href={game.website} target="_blank" rel="noreferrer">
                    {game.website}
                  </a>
                  <h3>Released</h3>
                  <span>{game.released}</span>
                  <h3>Available on</h3>
                  <div className="platforms">
                    {game.platforms.map(({ platform }, index, platforms) => {
                      return index === platforms.length - 1 ? (
                        <span key={platform.id}>{platform.name}</span>
                      ) : (
                        <span key={platform.id}>{platform.name},</span>
                      );
                    })}
                  </div>
                </div>
                <div className="innerContainer">
                  <h3>Genres</h3>
                  <div className="genres">
                    {game.genres.map((genre, index, genres) => {
                      return index === genres.length - 1 ? (
                        <span key={index}>{genre.name}</span>
                      ) : (
                        <span key={index}>{genre.name},</span>
                      );
                    })}
                  </div>
                  <h3>ESRB Rating</h3>
                  <span>{game.esrbRating}</span>
                </div>
              </StyledDetails>
            </article>
            <article>
              <StyledDescription>
                <h3>About</h3>
                <div
                  className="innerContainer"
                  dangerouslySetInnerHTML={{ __html: game.description }}
                ></div>
              </StyledDescription>
            </article>
          </section>
          <section>
            <StyledScreenshots>
              <Carousel name={game.name} screenshots={game.screenshots} />
            </StyledScreenshots>
          </section>
        </StyledInnerContainer>
      </section>
    </StyledGameDetails>
  );
};

export default GameDetails;
