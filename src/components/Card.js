import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledCard,
  StyledContent,
  StyledImageContainer,
} from './styles/Card.styled';

const Card = ({ result }) => {
  return (
    <StyledCard>
      <StyledImageContainer imgUrl={result.background_image} />
      <StyledContent>
        <Link
          to={`/details/${result.slug}`}
          state={{
            selectedGame: result,
          }}
        >
          <h2>{result.name}</h2>
        </Link>
        <div>
          <Link
            to={`/details/${result.slug}`}
            state={{
              selectedGame: result,
            }}
          >
            <span className="button">View page</span>
          </Link>
        </div>
      </StyledContent>
      <StyledImageContainer imgUrl={result.background_image} />
    </StyledCard>
  );
};

export default Card;
