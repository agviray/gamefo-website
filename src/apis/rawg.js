import axios from 'axios';

// const KEY = ;

// - Create instance of RAWG api URL for you to reference.
const rawg = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

// - Export getResults so it can be used in other parts of this app.
// - getResults takes in params object as an argument, which contains
//   data that determines the type of data we want from the API.
export const getResults = async (params) => {
  const passedParams = { ...params };
  let response;
  let gameId;

  // - Main checks at this 'if/else level' are:
  //   1) Check if the passedParams contains an id property.
  //      - passedParams will only have an id if we are looking for a
  //        specific response, ie a specific game rather than all games.
  //   2) If no id property is present in passedParams, then send a 'plain' GET request.
  //      - Sending a 'plain' GET request results in obtaining response data based on
  //        other properties in the passedParams argument.
  //      - Results will vary depending on what getResults is used for.
  if (passedParams.hasOwnProperty('id')) {
    gameId = passedParams.id;
    if (passedParams.hasOwnProperty('type')) {
      // - Get trailer data for a single, specific game.
      if (passedParams.type === 'movies') {
        const type = passedParams.type;
        response = await rawg.get(`/games/${gameId}/${type}?key=${KEY}`);
      }
    } else {
      // - Get general game data for a single, specific game.
      response = await rawg.get(`/games/${gameId}?key=${KEY}`);
    }
  } else {
    // - Get all games based on property values provided in passedParams.
    response = await rawg.get(`/games?key=${KEY}`, {
      params: {
        ...passedParams,
      },
    });
  }
  return response;
};
