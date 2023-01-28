import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  width: 100%;
  img {
    max-width: 100%;
  }
`;

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
        <StyledImageContainer>
          <img src={result.background_image} alt={`${result.name}`} />
        </StyledImageContainer>
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
