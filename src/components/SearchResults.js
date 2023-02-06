import React, { useState, useEffect, useContext } from 'react';
import { StyledResultsList } from './styles/SearchResults.styled';
import { ResponseContext } from './Layout';
import PageNumbers from './PageNumbers';
import Card from './Card';

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
    <Card key={result.id} result={result} />
  ));

  return results.length === 0 ? null : (
    <div className="container">
      <StyledResultsList>{renderedItems}</StyledResultsList>
      <PageNumbers response={responseContextValue.response} />
    </div>
  );
};

export default SearchResults;
