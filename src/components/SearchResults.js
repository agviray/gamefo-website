import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {
  useEffect(() => {
    // console.log(`SearchResults says: ${JSON.stringify(results)}`);
  }, [results]);

  const renderedItems = results.map((result) => (
    <div key={result.id} className="resultItem">
      <Link
        to={`/details/${result.name}`}
        state={{
          selectedGame: result,
        }}
      >
        <img src={result.background_image} alt={`${result.name}`} />
      </Link>
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
