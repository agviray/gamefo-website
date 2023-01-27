import React, { useEffect } from 'react';

const SearchResults = ({ results }) => {
  useEffect(() => {
    console.log(`SearchResults says: ${JSON.stringify(results)}`);
  }, [results]);

  const renderedItems = results.map((result, index) => (
    <div key={index} className="resultItem">
      <img src={result.background_image} alt="" />
    </div>
  ));

  return results.length === 0 ? null : (
    <div className="container">
      <div className="content">
        <div className="resultsList">{renderedItems}</div>
      </div>
    </div>
  );
};

export default SearchResults;
