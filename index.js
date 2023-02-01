const PORT = 4000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// - Need this to bypass browser error:
/*
localhost/:1 Access to XMLHttpRequest at 'http://localhost:4000/games?search=mario' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
*/
app.use(cors());

// *** Template for other possible paths ***
// app.get('/', (req, res) => {
//   res.json('hi');
// });

const rawg = axios.create({
  baseURL: `https://api.rawg.io/api`,
});

app.get('/games', async (req, res) => {
  console.log(req);
  const passedParams = { ...req.query };
  const response = await rawg.get(
    `/games?key=${process.env.REACT_APP_RAWG_KEY}`,
    {
      params: {
        ...passedParams,
      },
    }
  );
  res.json(response.data);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
