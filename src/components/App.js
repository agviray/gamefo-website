import React from 'react';
import GlobalStyles from '../components/styles/GlobalStyles';
import SearchBar from './SearchBar';

const App = () => {
  console.log('App refereshed!');
  return (
    <>
      <GlobalStyles />
      <div className="appContainer">
        <SearchBar />
      </div>
    </>
  );
};

export default App;
