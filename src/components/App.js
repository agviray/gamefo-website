import React from 'react';
import GlobalStyles from '../components/styles/GlobalStyles';
import Layout from './Layout';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <SearchBar />
        <SearchResults />
      </Layout>
    </>
  );
};

export default App;
