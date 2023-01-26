import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  header,
  footer {
    padding: 1.25rem 0;
    text-align: center;
  }
`;

const StyledMainContent = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 100px 20px;
`;

const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <header>
        <h1>Game-Fo</h1>
      </header>
      <main>
        <StyledMainContent>{children}</StyledMainContent>
      </main>
      <footer>
        <span>&copy; footer content</span>
      </footer>
    </StyledWrapper>
  );
};

export default Layout;
