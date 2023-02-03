import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledResultsList,
  StyledResultsItem,
  StyledImgContainer,
} from './styles/SearchResults.styled';
import PageNumbers from './PageNumbers';

const SearchResults = ({ responseData }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (Object.keys(responseData.receivedData).length === 0) {
      return;
    }
    if (responseData.receivedData.results[0] !== results[0]) {
      setResults([...responseData.receivedData.results]);
    }
  }, [responseData]);

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
      <StyledResultsList>{renderedItems}</StyledResultsList>
      <PageNumbers responseData={responseData} />
    </div>
  );
};

export default SearchResults;
