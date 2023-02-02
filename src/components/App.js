import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import HomePage from './HomePage';
import GameDetails from './GameDetails';
import NotFoundPage from './NotFound';
import SearchResults from './SearchResults';

export const ResponseContext = createContext(null);

const App = () => {
  const [responseData, setResponseData] = useState({});

  const updateResponseData = async (passedParams) => {
    const response = await axios.get('http://localhost:4000/games', {
      params: {
        ...passedParams,
      },
    });

    console.log(response);
    setResponseData({ ...response.data });
  };

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ResponseContext.Provider
            value={{
              responseData: responseData,
              onResponseDataChange: updateResponseData,
            }}
          >
            <Layout />
          </ResponseContext.Provider>
        }
      >
        <Route index element={<HomePage />} />
        <Route
          path="/search"
          element={<SearchResults responseData={responseData} />}
        />
        <Route path="/details/:name" element={<GameDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
