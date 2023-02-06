import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledCard,
  StyledImgContainer,
  StyledContent,
} from './styles/Card.styled';

const Card = ({ result }) => {
  return (
    <StyledCard>
      <StyledImgContainer>
        <img src={result.background_image} alt={`${result.name}`} />
      </StyledImgContainer>
      <StyledContent>
        <h2>{result.name}</h2>
        <Link
          to={`/details/${result.name}`}
          state={{
            selectedGame: result,
          }}
        >
          <span className="button">View page</span>
        </Link>
      </StyledContent>
    </StyledCard>
  );
};

export default Card;
