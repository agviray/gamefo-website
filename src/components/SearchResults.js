import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledResultsList,
  StyledResultsItem,
  StyledImgContainer,
} from './styles/SearchResults.styled';

const SearchResults = ({ results }) => {
  useEffect(() => {
    // console.log(`SearchResults says: ${JSON.stringify(results)}`);
  }, [results]);

  const renderedItems = results.map((result) => (
    <StyledResultsItem key={result.id}>
      <StyledImgContainer>
        <img src={result.background_image} alt={`${result.name}`} />
      </StyledImgContainer>
      <div className="itemContent">
        <h2 className="name">{result.name}</h2>
        <Link
          to={`/details/${result.name}`}
          state={{
            selectedGame: result,
          }}
        >
          <span className="button">View page</span>
        </Link>
      </div>
    </StyledResultsItem>
  ));

  return results.length === 0 ? null : (
    <div className="container">
      <div className="content">
        <StyledResultsList>{renderedItems}</StyledResultsList>
      </div>
    </div>
  );
};

export default SearchResults;
