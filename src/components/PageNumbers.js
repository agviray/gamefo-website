import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from './styles/PageNumbers.styled';

const PageNumbers = ({ responseData }) => {
  const [pageDetails, setPageDetails] = useState({ currentPageNum: 0 });
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

      if (currentPage === 0) {
        for (let i = 0; i < totalPageNumsToShow; i++) {
          if (i + 1 <= pageDetails.finalPageNum) {
            newPageNumsToShow[i] = i + 1;
          }
        }
        setPageNumsToRender([...newPageNumsToShow]);
      }
    };

    const previousCurrentPageNum = pageDetails.currentPageNum;
    if (pageDetails.currentPageNum === 0) {
      updatePageNumsToRender(0);
    }
  }, [pageDetails]);

  const renderPageNumbers = (pageNums) => {
    if (pageNums.length === 0) {
      return;
    }
    return pageNums.map((num, index) => <span key={index}>{num}</span>);
  };

  return (
    <StyledContainer>
      <div className="contents">
        <span>Prev</span>
        {renderPageNumbers(pageNumsToRender)}
        <span>Next</span>
      </div>
    </StyledContainer>
  );
};

export default PageNumbers;
