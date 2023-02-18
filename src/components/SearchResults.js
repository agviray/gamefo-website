import React, { useState, useEffect, useContext } from 'react';
import { StyledWrapper, StyledResults } from './styles/SearchResults.styled';
import { ResponseContext } from './Layout';
import useScrollYPosition from './hooks/useScrollYPosition';
import PageNumbers from './PageNumbers';
import Card from './Card';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const responseContextValue = useContext(ResponseContext);
  const scrollYPosition = useScrollYPosition();

  useEffect(() => {
    if (Object.keys(responseContextValue.response.dataReceived).length === 0) {
      return;
    }
    if (responseContextValue.response.dataReceived.results[0] !== results[0]) {
      setResults([...responseContextValue.response.dataReceived.results]);
    }
  }, [responseContextValue.response]);

  useEffect(() => {
    if (scrollYPosition > 0) {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [responseContextValue.response]);

  const renderedItems = results.map((result) => (
    <article key={result.id}>
      <Card result={result} />
    </article>
  ));

  return (
    <StyledWrapper>
      {results.length === 0 ? null : (
        <section>
          <div className="container">
            <div className="info">
              Found{' '}
              {responseContextValue.response.dataReceived.count.toLocaleString(
                'en-US'
              )}{' '}
              results for "
              {
                <span className="term">
                  {responseContextValue.response.termSearched}
                </span>
              }
              "
            </div>
            <StyledResults>{renderedItems}</StyledResults>
            <article>
              <PageNumbers response={responseContextValue.response} />
            </article>
          </div>
        </section>
      )}
    </StyledWrapper>
  );
};

export default SearchResults;
