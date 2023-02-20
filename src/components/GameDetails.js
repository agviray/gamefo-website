import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {
  StyledGameDetails,
  StyledHero,
  StyledInnerContainer,
  StyledDetails,
  StyledDescription,
  StyledScreenshots,
  StyledVideoContainer,
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

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
      const apiResponse = await axios.get('http://localhost:4000/games', {
        params: {
          id: id,
          type: 'movies',
        },
      });

      console.log(apiResponse);

      const trailer = apiResponse.data.results[0];

      setGame({
        ...game,
        trailer: {
          ...trailer,
        },
      });
    };

    console.log(game);

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

  useEffect(() => {
    const video = videoRef.current;
    const updateIsVideoPlaying = () => {
      if (isVideoPlaying === false) {
        setIsVideoPlaying(true);
      } else if (isVideoPlaying === true) {
        setIsVideoPlaying(false);
      }
    };

    video.addEventListener('play', updateIsVideoPlaying);
    video.addEventListener('pause', updateIsVideoPlaying);

    return () => {
      video.removeEventListener('play', updateIsVideoPlaying);
      video.removeEventListener('pause', updateIsVideoPlaying);
    };
  }, [isVideoPlaying]);

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
            {Object.keys(game.trailer).length === 0 ? null : (
              <StyledVideoContainer>
                {isVideoPlaying ? null : (
                  <div className="imageContainer">
                    <figure>
                      <img src={game.trailer.preview} alt={game.trailer.name} />
                    </figure>
                  </div>
                )}
                <video
                  ref={videoRef}
                  className="video"
                  controls
                  src={game.trailer.data.max}
                  type="video/mp4"
                ></video>
              </StyledVideoContainer>
            )}
          </section>
        </StyledInnerContainer>
      </section>
    </StyledGameDetails>
  );
};

export default GameDetails;
