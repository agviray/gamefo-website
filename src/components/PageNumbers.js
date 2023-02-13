import React, { useState, useEffect, useContext } from 'react';
import {
  StyledContainer,
  StyledPageController,
} from './styles/PageNumbers.styled';
import { ResponseContext } from './Layout';

const initialPageDetails = {
  currentSearchedTerm: '',
  currentPageNum: null,
  finalPageNum: null,
  resultsFound: null,
  pageNumsToShow: [],
};

const PageNumbers = ({ response }) => {
  const [pageDetails, setPageDetails] = useState(initialPageDetails);
  const responseContextValue = useContext(ResponseContext);

  useEffect(() => {
    const setNewPageDetails = (response) => {
      const totalPageNumsToShow = 5;
      const resultsPerPage = 20;
      const finalPageNum = Math.ceil(
        response.dataReceived.count / resultsPerPage
      );
      const currentRangeNums = response.pageRange;
      let newPageNumsToShow = [];

      if (currentRangeNums.length === 0) {
        for (let i = 0; i < totalPageNumsToShow; i++) {
          if (i + 1 <= finalPageNum) {
            newPageNumsToShow[i] = i + 1;
          } else {
            break;
          }
        }
      } else {
        newPageNumsToShow = [...currentRangeNums];
      }

      setPageDetails({
        currentSearchedTerm: response.termSearched,
        currentPageNum: response.pageRequested,
        finalPageNum: finalPageNum,
        resultsFound: response.dataReceived.count,
        pageNumsToShow: [...newPageNumsToShow],
      });
    };

    if (response.termSearched !== pageDetails.currentSearchedTerm) {
      setNewPageDetails(response);
    }
  }, [response]);

  useEffect(() => {
    const updateResponse = (term, pageNum, pageRange) => {
      responseContextValue.onResponseChange(term, pageNum, pageRange);
    };

    if (pageDetails.currentSearchedTerm === '') {
      return;
    }

    if (pageDetails.currentPageNum !== response.pageRequested) {
      updateResponse(
        pageDetails.currentSearchedTerm,
        pageDetails.currentPageNum,
        pageDetails.pageNumsToShow
      );
    }
  }, [pageDetails]);

  // ***************************
  // About updatePageNumsToShow
  // ***************************
  // - Responsible for updating the current range of numbers displayed at the
  //   bottom of the page.
  // - The range of numbers must not exceed 5--this is just the max numbers that
  //   want to show in the range =).
  // - The numbers in the range are updated accordingly, depending on the current
  //   page number, and whether the prev/next button is clicked.
  const updatePageNumsToShow = (page) => {
    const totalPageNumsToShow = 5;
    const currentRangeNums = pageDetails.pageNumsToShow;
    const firstRangeNum = currentRangeNums[0];
    const lastRangeNum = currentRangeNums[currentRangeNums.length - 1];
    let newPageNumsToShow = [];

    if (currentRangeNums.includes(page)) {
      setPageDetails({
        ...pageDetails,
        currentPageNum: page,
      });
      return;
    }

    if (!currentRangeNums.includes(page)) {
      for (let i = 0; i < totalPageNumsToShow; i++) {
        if (page < firstRangeNum) {
          newPageNumsToShow[i] = page - i;
        }
        if (page > lastRangeNum) {
          if (page + i <= pageDetails.finalPageNum) {
            newPageNumsToShow[i] = page + i;
          } else {
            break;
          }
        }
      }
      newPageNumsToShow.sort((a, b) => {
        return a - b;
      });
      setPageDetails({
        ...pageDetails,
        currentPageNum: page,
        pageNumsToShow: [...newPageNumsToShow],
      });
    }
  };

  const goToPrevPage = (page) => {
    updatePageNumsToShow(page.currentPageNum - 1);
  };

  const goToNextPage = (page) => {
    updatePageNumsToShow(page.currentPageNum + 1);
  };

  const goToPage = (pageNum) => {
    updatePageNumsToShow(pageNum);
  };

  const renderContent = (page) => {
    return (
      <>
        <StyledPageController
          className={`prev ${page.currentPageNum === 1 ? 'hidden' : ''}`}
        >
          <span onClick={() => goToPrevPage(page)}>Prev</span>
        </StyledPageController>
        <div className={'pageNumbers'}>
          {page.pageNumsToShow.map((num, index) => (
            <span
              key={index}
              className={`${
                num !== pageDetails.currentPageNum ? 'inactive' : 'active'
              }`}
              onClick={() => goToPage(num)}
            >
              {num}
            </span>
          ))}
        </div>
        <StyledPageController
          className={`next ${
            page.currentPageNum === page.finalPageNum ? 'hidden' : ''
          }`}
        >
          <span onClick={() => goToNextPage(page)}>Next</span>
        </StyledPageController>
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
