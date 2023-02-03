import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles, {
  StyledMainContent,
} from '../components/styles/GlobalStyles';
import Navbar from './Navbar';

export const ResponseContext = createContext(null);

const Layout = ({ responseData, onResponseDataChange }) => {
  return (
    <>
      <GlobalStyles />
      <ResponseContext.Provider
        value={{
          responseData: responseData,
          onResponseDataChange: onResponseDataChange,
        }}
      >
        <header>
          <Navbar />
        </header>
        <main>
          <StyledMainContent>
            <Outlet />
          </StyledMainContent>
        </main>
        <footer>
          <span>&copy; footer content</span>
        </footer>
      </ResponseContext.Provider>
    </>
  );
};

export default Layout;
