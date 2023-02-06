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
      {/* <StyledContent>
        <h2>{result.name}</h2>
        <Link
          to={`/details/${result.name}`}
          state={{
            selectedGame: result,
          }}
        >
          <span className="button">View page</span>
        </Link>
      </StyledContent> */}
    </StyledCard>
  );
};

export default Card;
