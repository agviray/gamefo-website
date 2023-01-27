import React from 'react';
import SearchResults from './SearchResults';

const HomePage = ({ results }) => {
  return (
    <div className="container">
      <div className="content">
        <h2>Home Page</h2>
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default HomePage;
