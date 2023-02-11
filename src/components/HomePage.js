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
  const [gameTrailer, setGameTrailer] = useState({ ...initialGameTrailer });

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

  return (
    <StyledHomePage>
      <div className="content">
        <h2>Home Page</h2>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
