import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledHomePage } from './styles/HomePage.styled';

const initialGameTrailer = {
  data: {},
  id: null,
  name: '',
  preview: '',
};

const HomePage = () => {
  const [games, setGames] = useState([]);
  // const [gameTrailer, setGameTrailer] = useState({ ...initialGameTrailer });

  useEffect(() => {
    const getGames = async () => {
      const d = new Date();
      const month =
        d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const currentYear = d.getFullYear().toString();
      const prevYear = (currentYear - 1).toString();
      const dateRange = `${prevYear}-${month}-${date},${currentYear}-${month}-${date}`;
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
  }, [games]);
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
      <div className="content">
        <h2>Home Page</h2>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
