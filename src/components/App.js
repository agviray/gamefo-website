import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from '../components/styles/GlobalStyles';
import Layout from './Layout';
import HomePage from './HomePage';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import axios from 'axios';
const App = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    console.log(results);
  }, [results]);

  const updateResults = async (term) => {
    const response = await axios.get('http://localhost:4000/games', {
      params: {
        search: term,
      },
    });

    console.log(response);
  };
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/search"
            element={<SearchBar onTermSubmit={updateResults} />}
          />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
