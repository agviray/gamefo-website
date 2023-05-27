import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledCard,
  StyledContent,
  StyledImageContainer,
} from './styles/Card.styled';

const Card = ({ result }) => {
  return (
    <Link
      to={`/details/${result.slug}`}
      state={{
        selectedGame: result,
      }}
    >
      <StyledCard>
        <StyledImageContainer imgUrl={result.background_image} />
        <StyledContent>
          <h2>{result.name}</h2>
          <div>
            <span className="button">View page</span>
          </div>
        </StyledContent>
        <StyledImageContainer imgUrl={result.background_image} />
      </StyledCard>
    </Link>
  );
};

export default Card;
