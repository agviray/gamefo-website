import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledGameDetails,
  StyledHero,
  StyledInnerContainer,
  StyledDetails,
  StyledDescription,
  StyledVideos,
  StyledScreenshots,
} from './styles/GameDetails.styled';
import Dropdown from './Dropdown';
import Carousel from './Carousel';
import Video from './Video';
import { ResponseContext } from './Layout';
import { getResults } from '../apis/rawg';

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
  trailer: {
    data: {},
    id: null,
    name: '',
    preview: '',
  },
};

const GameDetails = () => {
  const [game, setGame] = useState({ ...initialGame });
  const location = useLocation();
  const { selectedGame } = location.state;
  const responseContextValue = useContext(ResponseContext);

  useEffect(() => {
    const getGameDetails = async (id) => {
      const stringId = id.toString();
      const apiResponse = await getResults({ id: stringId });
      const data = apiResponse.data;

      setGame({
        ...game,
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
    }
  }, []);

  useEffect(() => {
    // *** About getGameTrailer ***
    // - Get a trailer of the game.
    const getGameTrailer = async (id) => {
      const apiResponse = await getResults({
        id: id,
        type: 'movies',
      });

      const trailer = apiResponse.data.results[0];

      setGame({
        ...game,
        trailer: {
          ...trailer,
        },
      });
    };

    if (game.trailer.id === null) {
      if (game.id === null) {
        return;
      } else {
        getGameTrailer(game.id);
      }
    }

    if (game.trailer.id !== null) {
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
      <Dropdown>
        <div
          className="innerContainer"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </Dropdown>
    );
  };

  return game.id === null ? null : (
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
            {Object.keys(game.trailer).length === 0 ? null : (
              <StyledVideos>
                <Video trailer={{ ...game.trailer }} />
              </StyledVideos>
            )}
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
