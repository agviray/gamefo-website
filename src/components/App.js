import React from 'react';
import GlobalStyles from '../components/styles/GlobalStyles';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="appContainer">
        <SearchBar />
        <SearchResults />
      </div>
    </>
  );
};

export default App;
