import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import HomePage from './HomePage';
import GameDetails from './GameDetails';
import NotFoundPage from './NotFound';
import SearchResults from './SearchResults';

const initialResponseData = {
  termSearched: '',
  pageRequested: null,
  receivedData: {},
};

const App = () => {
  const [responseData, setResponseData] = useState(initialResponseData);

  const updateResponseData = async (term, pageNum) => {
    const response = await axios.get('http://localhost:4000/games', {
      params: {
        search: term,
        page: pageNum,
      },
    });

    console.log(response);
    setResponseData({
      termSearched: term,
      pageRequested: pageNum,
      receivedData: { ...response.data },
    });
  };

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            responseData={responseData}
            onResponseDataChange={updateResponseData}
          />
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
