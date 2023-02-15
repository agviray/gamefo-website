import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalStyles, {
  StyledMainContent,
} from '../components/styles/GlobalStyles';
import Navbar from './Navbar';

export const ResponseContext = createContext(null);

const initialResponse = {
  termSearched: '',
  pageRequested: null,
  pageRange: [],
  dataReceived: {},
};

const Layout = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [response, setResponse] = useState(initialResponse);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setIsNavbarHidden(true);
    } else {
      setIsNavbarHidden(false);
    }
  }, [pathname]);

  const updateResponse = async (term, pageNum, pageRange) => {
    const apiResponse = await axios.get('http://localhost:4000/games', {
      params: {
        search: term,
        page: pageNum,
      },
    });

    console.log(apiResponse);
    setResponse({
      termSearched: term,
      pageRequested: pageNum,
      pageRange: [...pageRange],
      dataReceived: { ...apiResponse.data },
    });
  };

  return (
    <>
      <GlobalStyles />
      <ResponseContext.Provider
        value={{
          response: response,
          onResponseChange: updateResponse,
        }}
      >
        <header>{isNavbarHidden ? null : <Navbar />}</header>
        <main>
          <Outlet />
        </main>
        <footer>
          <span>&copy; footer content</span>
        </footer>
      </ResponseContext.Provider>
    </>
  );
};

export default Layout;
