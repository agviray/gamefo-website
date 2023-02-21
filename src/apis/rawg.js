import axios from 'axios';

const KEY = process.env.REACT_APP_RAWG_KEY;

const rawg = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

export const getResults = async (params) => {
  const passedParams = { ...params };
  let response;
  let gameId;

  if (passedParams.hasOwnProperty('id')) {
    gameId = passedParams.id;
    if (passedParams.hasOwnProperty('type')) {
      if (passedParams.type === 'movies') {
        const type = passedParams.type;
        response = await rawg.get(`/games/${gameId}/${type}?key=${KEY}`);
      }
    } else {
      response = await rawg.get(
        `/games/${gameId}?key=${process.env.REACT_APP_RAWG_KEY}`
      );
    }
  } else {
    response = await rawg.get(`/games?key=${KEY}`, {
      params: {
        ...passedParams,
      },
    });
  }
  return response;
};
