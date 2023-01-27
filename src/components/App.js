import React, { useState, useEffect } from 'react';
import GlobalStyles from '../components/styles/GlobalStyles';
import Layout from './Layout';
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
        <SearchBar onTermSubmit={updateResults} />
        <SearchResults />
      </Layout>
    </>
  );
};

export default App;
