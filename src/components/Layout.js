import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from '../components/styles/GlobalStyles';
import styled from 'styled-components';
import Navbar from './Navbar';
const StyledWrapper = styled.div`
  header,
  footer {
    padding-top: 1.25rem;
    text-align: center;
  }
`;

const StyledMainContent = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = ({ onResultsChange }) => {
  return (
    <>
      <GlobalStyles />
      <StyledWrapper>
        <header>
          <Navbar onResultsChange={onResultsChange} />
        </header>
        <main>
          <StyledMainContent>
            <Outlet />
          </StyledMainContent>
        </main>
        <footer>
          <span>&copy; footer content</span>
        </footer>
      </StyledWrapper>
    </>
  );
};

export default Layout;
