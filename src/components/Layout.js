import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import GlobalStyles, {
  StyledMainContent,
} from '../components/styles/GlobalStyles';
import Navbar from './Navbar';

export const ResponseContext = createContext(null);

const initialResponseData = {
  termSearched: '',
  pageRequested: null,
  receivedData: {},
};

const Layout = () => {
  const [responseData, setResponseData] = useState(initialResponseData);

  const updateResponseData = async (term, pageNum) => {
    const response = await axios.get('http://localhost:4000/games', {
      params: {
        search: term,
        page: pageNum,
      },
    });

    console.log(response);
    setResponseData({
      termSearched: term,
      pageRequested: pageNum,
      receivedData: { ...response.data },
    });
  };

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  return (
    <>
      <GlobalStyles />
      <ResponseContext.Provider
        value={{
          responseData: responseData,
          onResponseDataChange: updateResponseData,
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
