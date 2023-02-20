import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledNotFound } from './styles/NotFound.styled';

const NotFoundPage = () => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    if (isShown === false) {
      setIsShown(true);
    }
  }, []);
  return (
    <section>
      <StyledNotFound>
        <div className="content">
          <h2 className={`${isShown ? 'isShown' : ''}`}>YOU'RE LOST</h2>
          <div className={`message ${isShown ? 'isShown' : ''}`}>
            <span>ERROR 404: This page does not exist. Return to home?</span>
            <div>
              <div className="arrow"></div>
              <Link to="/">
                <span className="option">Yes</span>
              </Link>
            </div>
          </div>
        </div>
      </StyledNotFound>
    </section>
  );
};

export default NotFoundPage;
