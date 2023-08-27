import React, { useState, useEffect, createContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalStyles from '../components/styles/GlobalStyles';
import GlobalFonts from '../components/styles/GlobalFonts';
import { StyledFooterContent } from './styles/Layout.styled';
import Navbar from './Navbar';
import Loader from './Loader';
import { getResults } from '../apis/rawg';

// - Create context object to share data with other components.
// - Context value is provided via ResponseContext.Provider
//   parent wrapper returned from this Layout component.
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

  // - Clear pending status when response is updated.
  // - isResponsePending is used to show/hide a loading screen.
  useEffect(() => {
    if (isResponsePending === true) {
      setIsResponsePending(false);
    }
  }, [response]);

  // - Changes visibility of navbar based on current Route.
  useEffect(() => {
    if (pathname === '/') {
      setIsNavbarHidden(true);
    } else {
      setIsNavbarHidden(false);
    }
  }, [pathname]);

  // - Gets game data to be displayed, based on provided searched term, page number, and
  //   page number range.
  const updateResponse = async (term, pageNum, pageRange) => {
    const apiResponse = await getResults({ search: term, page: pageNum });

    setResponse({
      termSearched: term,
      pageRequested: pageNum,
      pageRange: [...pageRange],
      dataReceived: { ...apiResponse.data },
    });
  };

  // - Updates pending status of response.
  const updateIsResponsePending = (status) => {
    setIsResponsePending(status);
  };

  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
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
