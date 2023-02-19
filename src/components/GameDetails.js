import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {
  StyledGameDetails,
  StyledHero,
  StyledInnerContainer,
  StyledDetails,
  StyledDescription,
  StyledScreenshots,
} from './styles/GameDetails.styled';
import Carousel from './Carousel';
import { ResponseContext } from './Layout';

const initialGame = {
  id: null,
  name: '',
  released: '',
  website: '',
  developers: [],
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
  const responseContextValue = useContext(ResponseContext);

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
        developers: data.developers ? [...data.developers] : [],
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
      responseContextValue.onIsResponsePendingChange(true);
      getGameDetails(selectedGame.id);
    } else if (selectedGame.id === game.id) {
      if (responseContextValue.isResponsePending === true) {
        responseContextValue.onIsResponsePendingChange(false);
      }
    }
  }, [game]);

  // *** About formatDescription ***
  // - Formats the api's description response (<br/> being used, causing
  //   text to not be displayed properly)
  const formatDescription = (desc) => {
    let description = desc.replaceAll('<br />', '</p><p>');
    return (
      <div
        className="innerContainer"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    );
  };

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
              <div className="genres">
                {game.genres.map((genre, index, genres) => (
                  <span className="container" key={index}>
                    <span>{genre.name}</span>
                  </span>
                ))}
              </div>
              <StyledDetails>
                <div className="innerContainer">
                  <h3>Released</h3>
                  <span>{game.released}</span>
                  <h3>Developers</h3>
                  <div className="developers">
                    {game.developers.map((developer, index, developers) => {
                      return index === developers.length - 1 ? (
                        <span key={index}>{developer.name}</span>
                      ) : (
                        <span key={index}>{developer.name},</span>
                      );
                    })}
                  </div>
                  <h3>Website</h3>
                  <a href={game.website} target="_blank" rel="noreferrer">
                    {game.website}
                  </a>
                </div>
                <div className="innerContainer">
                  <h3>ESRB Rating</h3>
                  <span>{game.esrbRating}</span>
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
              </StyledDetails>
            </article>
            <article>
              <StyledDescription>
                <h3>About</h3>
                {formatDescription(game.description)}
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
