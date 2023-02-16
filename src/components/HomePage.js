import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyledHomePage, StyledSearchBlock } from './styles/HomePage.styled';
import Banner from './Banner';
import MagnifyingGlass from './MagnifyingGlass';

const initialGameTrailer = {
  data: {},
  id: null,
  name: '',
  preview: '',
};

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [images, setImages] = useState([]);
  // const [gameTrailer, setGameTrailer] = useState({ ...initialGameTrailer });

  useEffect(() => {
    const getGames = async (earlierYear, laterYear) => {
      const d = new Date();
      const month =
        d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const currentYear = d.getFullYear().toString();
      const prevYear = (currentYear - 1).toString();
      let dateRange;

      if (!earlierYear && !laterYear) {
        dateRange = `${prevYear}-${month}-${date},${currentYear}-${month}-${date}`;
      } else {
        dateRange = `${earlierYear}-${month}-${date},${laterYear}-${month}-${date}`;
      }
      const apiResponse = await axios.get('http://localhost:4000/games', {
        params: {
          dates: dateRange,
          ordering: '-added',
        },
      });

      const results = apiResponse.data.results;
      setGames([...results]);
    };

    if (games.length === 0) {
      getGames();
    }
  }, []);

  useEffect(() => {
    console.log(games);
    const imageContents = games.map((game, index) => {
      const image = {
        title: `image #${index + 1}`,
        imageUrl: game.background_image,
      };

      return image;
    });

    if (images.length === 0) {
      setImages([...imageContents]);
    }
  }, [games]);

  useEffect(() => {
    console.log(images);
  }, [images]);
  /*
  useEffect(() => {
    const getGameTrailer = async (id) => {
      const apiResponse = await axios.get('http://localhost:4000/games', {
        params: {
          id: id,
          type: 'movies',
        },
      });

      const trailer = apiResponse.data.results[0];
      setGameTrailer({ ...trailer });
    };

    if (gameTrailer.id === null) {
      // Using GTA 5 game id, 3498, for testing.
      getGameTrailer(3498);
    }
  }, []);
  
    useEffect(() => {
      console.log(gameTrailer);
    }, [gameTrailer]);
  */

  return (
    <StyledHomePage>
      <section>
        <div className="hero">
          <div className="banner1">
            <Banner images={images} />
          </div>
          <div className="content">
            <div className="innerContainer">
              <h1>Game-Fo</h1>
              <p>Welcome to Game-Fo, a video game information database!</p>
              <p>
                Start browsing our selection by clicking below and entering a
                video game title.
              </p>
              <StyledSearchBlock>
                <Link to="/search">
                  <div className="searchBlockContent">
                    <div className="magnifyingGlassContainer">
                      <MagnifyingGlass />
                    </div>
                    <span>Looking for something?</span>
                  </div>
                </Link>
              </StyledSearchBlock>
            </div>
          </div>
          <div className="banner2">
            <Banner images={images} />
          </div>
        </div>
      </section>
      <div className="content"></div>
    </StyledHomePage>
  );
};

export default HomePage;
