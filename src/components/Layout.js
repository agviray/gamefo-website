import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
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
  const [response, setResponse] = useState(initialResponse);

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
        <header>
          <Navbar />
        </header>
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
