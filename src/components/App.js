import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import GlobalStyles from '../components/styles/GlobalStyles';
import Layout from './Layout';
import HomePage from './HomePage';
import SearchBar from './SearchBar';
import GameDetails from './GameDetails';

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
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage results={results} />} />
          <Route
            path="/search"
            element={
              <SearchBar results={results} onResultsChange={updateResults} />
            }
          />
          <Route path="/details/:name" element={<GameDetails />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
