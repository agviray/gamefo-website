import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from './styles/PageNumbers.styled';

const initialResponseDetails = {
  resultsFound: null,
};

const initialPageDetails = {
  resultsPerPage: 20,
  prevCurrentPageNum: null,
  currentPageNum: null,
  finalPageNum: null,
  pageNumsToShow: [],
};

const PageNumbers = ({ responseData }) => {
  const [responseDetails, setResponseDetails] = useState(
    initialResponseDetails
  );
  const [pageDetails, setPageDetails] = useState(initialPageDetails);

  useEffect(() => {
    const updateResponseDetails = (resData) => {
      const resultsFound = resData.count;
      setResponseDetails({
        resultsFound: resultsFound,
      });
    };

    if (Object.keys(responseData).length !== 0) {
      updateResponseDetails(responseData);
    }
  }, [responseData]);

  useEffect(() => {
    console.log(`
    ************************
    responseDetails state is:
    ${JSON.stringify(responseDetails)}
    ************************
    `);

    const updatePageNumsToShow = (currentPage) => {
      const totalPageNumsToShow = 5;
      const finalPageNum = Math.ceil(
        responseDetails.resultsFound / pageDetails.resultsPerPage
      );
      let newPageNumsToShow = [];

      if (currentPage === null) {
        for (let i = 0; i < totalPageNumsToShow; i++) {
          if (i + 1 <= finalPageNum) {
            newPageNumsToShow[i] = i + 1;
          }
        }
        setPageDetails({
          ...pageDetails,
          currentPageNum: 1,
          finalPageNum: finalPageNum,
          pageNumsToShow: [...newPageNumsToShow],
        });
      }
    };

    if (responseDetails.resultsFound === null) {
      return;
    }

    if (pageDetails.currentPageNum === null) {
      updatePageNumsToShow(null);
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
