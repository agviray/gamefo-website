import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from './styles/PageNumbers.styled';

const PageNumbers = ({ responseData }) => {
  const [pageDetails, setPageDetails] = useState({
    prevCurrentPageNum: null,
    currentPageNum: 1,
  });
  const [pageNumsToRender, setPageNumsToRender] = useState([]);

  useEffect(() => {
    // console.log(JSON.stringify(responseData));
    // console.log(responseData);

    const updatePageNumDetails = (resData) => {
      const resultsFound = resData.count;
      const resultsPerPage = 20;
      const finalPageNum = Math.ceil(resultsFound / resultsPerPage);
      setPageDetails({
        ...pageDetails,
        resultsFound: resultsFound,
        resultsPerPage: resultsPerPage,
        finalPageNum: finalPageNum,
      });
    };

    if (Object.keys(responseData).length !== 0) {
      updatePageNumDetails(responseData);
    }
  }, [responseData]);

  useEffect(() => {
    // console.log(pageDetails)
    const updatePageNumsToRender = (currentPage) => {
      const totalPageNumsToShow = 5;
      let newPageNumsToShow = [];

      if (currentPage === 1) {
        for (let i = 0; i < totalPageNumsToShow; i++) {
          if (i + 1 <= pageDetails.finalPageNum) {
            newPageNumsToShow[i] = i + 1;
          }
        }
        setPageNumsToRender([...newPageNumsToShow]);
      }
    };

    if (pageDetails.currentPageNum === 1) {
      updatePageNumsToRender(1);
    }
  }, [pageDetails]);

  const goToPrevPage = (details) => {
    setPageDetails({
      ...details,
      prevCurrentPageNum: details.currentPageNum,
      currentPageNum: details.currentPageNum - 1,
    });
  };

  const goToNextPage = (details) => {
    setPageDetails({
      ...details,
      prevCurrentPageNum: details.currentPageNum,
      currentPageNum: details.currentPageNum + 1,
    });
  };

  const renderContent = (page, pageNums) => {
    /*
     return (
       <>
         {page.currentPageNum === 1 ? null : <span>Prev</span>}
         {pageNums.map((num, index) => (
           <span key={index}>{num}</span>
         ))}
         {page.currentPageNum === page.finalPageNum ? null : <span>Next</span>}
       </>
     );
    */
    return (
      <>
        <span onClick={() => goToPrevPage(page)}>Prev</span>
        {pageNums.map((num, index) => (
          <span key={index}>{num}</span>
        ))}
        <span onClick={() => goToNextPage(page)}>Next</span>
      </>
    );
  };

  return (
    <StyledContainer>
      <div className="content">
        {renderContent(pageDetails, pageNumsToRender)}
      </div>
    </StyledContainer>
  );
};

export default PageNumbers;
