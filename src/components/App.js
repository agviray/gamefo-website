import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import HomePage from './HomePage';
import GameDetails from './GameDetails';
import NotFoundPage from './NotFound';
import SearchResults from './SearchResults';

const App = () => {
  const [results, setResults] = useState([]);

  const updateResults = async (term) => {
    const response = await axios.get('http://localhost:4000/games', {
      params: {
        search: term,
      },
    });

    console.log(response);
    setResults([...response.data.results]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout onResultsChange={updateResults} />}>
        <Route index element={<HomePage results={results} />} />
        <Route path="/search" element={<SearchResults results={results} />} />
        <Route path="/details/:name" element={<GameDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
