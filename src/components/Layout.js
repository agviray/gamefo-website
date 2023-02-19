import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalStyles from '../components/styles/GlobalStyles';
import { StyledFooterContent } from './styles/Layout.styled';
import Navbar from './Navbar';
import Loader from './Loader';

export const ResponseContext = createContext(null);

const initialResponse = {
  termSearched: '',
  pageRequested: null,
  pageRange: [],
  dataReceived: {},
};

const Layout = () => {
  const [isResponsePending, setIsResponsePending] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [response, setResponse] = useState(initialResponse);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isResponsePending === true) {
      setIsResponsePending(false);
    }
  }, [response]);

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

  const updateIsResponsePending = (status) => {
    setIsResponsePending(status);
  };

  return (
    <>
      <GlobalStyles />
      <ResponseContext.Provider
        value={{
          response: response,
          onResponseChange: updateResponse,
          isResponsePending: isResponsePending,
          onIsResponsePendingChange: updateIsResponsePending,
        }}
      >
        <Loader status={isResponsePending} message={'Loading..'} />
        <header>{isNavbarHidden ? null : <Navbar />}</header>
        <main>
          <Outlet />
        </main>
        <footer>
          <StyledFooterContent>
            <span className="apiCredit">
              All data sourced via{' '}
              <a
                href="https://rawg.io/apidocs"
                target="_blank"
                rel="noreferrer"
              >
                RAWG's
              </a>{' '}
              API/database
            </span>
          </StyledFooterContent>
        </footer>
      </ResponseContext.Provider>
    </>
  );
};

export default Layout;
