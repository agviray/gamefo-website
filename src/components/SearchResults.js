import React from 'react';

const SearchResults = () => {
  const temporaryResults = [
    'Result 1',
    'Result 2',
    'Result 3',
    'Result 4',
    'Result 5',
  ];
  const renderedItems = temporaryResults.map((result, index) => (
    <div key={index} className="resultItem">
      {result}
    </div>
  ));

  return (
    <div className="container">
      <div className="content">
        <div className="resultsList">{renderedItems}</div>
      </div>
    </div>
  );
};

export default SearchResults;
