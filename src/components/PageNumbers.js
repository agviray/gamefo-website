import React, { useState, useEffect } from 'react';
import { StyledContainer } from './styles/PageNumbers.styled';

const initialResponseDetails = {
  currentSearchedTerm: '',
  currentPageRequested: null,
  resultsFound: null,
};

const initialPageDetails = {
  resultsPerPage: 20,
  prevCurrentPageNum: null,
  currentPageNum: null,
  finalPageNum: null,
  pageNumsToShow: [],
};

const PageNumbers = ({ response }) => {
  const [responseDetails, setResponseDetails] = useState(
    initialResponseDetails
  );
  const [pageDetails, setPageDetails] = useState(initialPageDetails);

  useEffect(() => {
    const resetPageNumbers = () => {
      setPageDetails(initialPageDetails);
      setResponseDetails(initialResponseDetails);
    };

    const updateResponseDetails = (res) => {
      const currentSearchedTerm = res.termSearched;
      const currentPageRequested = res.pageRequested;
      const resultsFound = res.dataReceived.count;
      setResponseDetails({
        currentSearchedTerm: currentSearchedTerm,
        currentPageRequested: currentPageRequested,
        resultsFound: resultsFound,
      });
    };

    if (response.termSearched !== responseDetails.currentSearchedTerm) {
      resetPageNumbers();
    }

    if (Object.keys(response.dataReceived).length !== 0) {
      updateResponseDetails(response);
    }
  }, [response]);

  useEffect(() => {
    console.log(`
    ************************
    responseDetails state is:
    ${JSON.stringify(responseDetails)}
    ************************
    `);

    const updatePageNumsToShow = (page) => {
      const totalPageNumsToShow = 5;
      const finalPageNum = Math.ceil(
        responseDetails.resultsFound / pageDetails.resultsPerPage
      );
      let newPageNumsToShow = [];

      if (page === 1) {
        for (let i = 0; i < totalPageNumsToShow; i++) {
          if (i + 1 <= finalPageNum) {
            newPageNumsToShow[i] = i + 1;
          }
        }
      }
      setPageDetails({
        ...pageDetails,
        currentPageNum: page,
        finalPageNum: finalPageNum,
        pageNumsToShow: [...newPageNumsToShow],
      });
    };

    if (responseDetails.resultsFound === null) {
      return;
    }

    if (responseDetails.currentPageRequested === 1) {
      updatePageNumsToShow(1);
    }
  }, [responseDetails]);

  useEffect(() => {
    console.log(`
    ///////////////////////
    pageDetails state is: 
    ${JSON.stringify(pageDetails)}
    ///////////////////////
  `);
  }, [pageDetails]);

  const goToPrevPage = (page) => {
    setPageDetails({
      ...page,
      prevCurrentPageNum: page.currentPageNum,
      currentPageNum: page.currentPageNum - 1,
    });
  };

  const goToNextPage = (page) => {
    setPageDetails({
      ...page,
      prevCurrentPageNum: page.currentPageNum,
      currentPageNum: page.currentPageNum + 1,
    });
  };

  const renderContent = (page) => {
    /*
     return (
       <>
         {page.currentPageNum === 1 ? null : <span>Prev</span>}
         {page.pageNumsToShow.map((num, index) => (
           <span key={index}>{num}</span>
         ))}
         {page.currentPageNum === page.finalPageNum ? null : <span>Next</span>}
       </>
     );
    */
    return (
      <>
        <span onClick={() => goToPrevPage(page)}>Prev</span>
        {page.pageNumsToShow.map((num, index) => (
          <span key={index}>{num}</span>
        ))}
        <span onClick={() => goToNextPage(page)}>Next</span>
      </>
    );
  };

  return (
    <StyledContainer>
      <div className="content">{renderContent(pageDetails)}</div>
    </StyledContainer>
  );
};

export default PageNumbers;
