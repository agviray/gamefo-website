import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles, {
  StyledMainContent,
} from '../components/styles/GlobalStyles';
import Navbar from './Navbar';

const Layout = ({ onResultsChange }) => {
  return (
    <>
      <GlobalStyles />
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
    </>
  );
};

export default Layout;
