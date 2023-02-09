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
  dataReceived: {},
};

const Layout = () => {
  const [response, setResponse] = useState(initialResponse);

  const updateResponse = async (term, pageNum) => {
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
      dataReceived: { ...apiResponse.data },
    });
  };

  useEffect(() => {
    console.log(`
    #######################################
    THE CURRENT TERM SEARCHED IS: 
    ${response.termSearched}
    THE CURRENT PAGE OF RESULTS IS PAGE: 
    ${response.pageRequested}
    #######################################
    `);
  }, [response]);

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
