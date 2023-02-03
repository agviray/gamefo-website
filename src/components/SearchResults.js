import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledResultsList,
  StyledResultsItem,
  StyledImgContainer,
} from './styles/SearchResults.styled';
import PageNumbers from './PageNumbers';
import { ResponseContext } from './Layout';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const responseContextValue = useContext(ResponseContext);

  useEffect(() => {
    if (Object.keys(responseContextValue.response.dataReceived).length === 0) {
      return;
    }
    if (responseContextValue.response.dataReceived.results[0] !== results[0]) {
      setResults([...responseContextValue.response.dataReceived.results]);
    }
  }, [responseContextValue.response]);

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
      <PageNumbers response={responseContextValue.response} />
    </div>
  );
};

export default SearchResults;
