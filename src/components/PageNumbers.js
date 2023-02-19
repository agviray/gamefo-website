import React, { useState, useEffect, useContext } from 'react';
import {
  StyledContainer,
  StyledNumbers,
  StyledControllers,
} from './styles/PageNumbers.styled';
import { ResponseContext } from './Layout';
import useScrollYPosition from './hooks/useScrollYPosition';

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
  const scrollYPosition = useScrollYPosition();

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
      if (scrollYPosition > 0) {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }
      responseContextValue.onIsResponsePendingChange(true);
      updateResponse(
        pageDetails.currentSearchedTerm,
        pageDetails.currentPageNum,
        pageDetails.pageNumsToShow
      );
    } else if (pageDetails.currentPageNum === response.pageRequested) {
      if (responseContextValue.isResponsePending === true) {
        responseContextValue.onIsResponsePendingChange(false);
      }
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
    if (page.currentPageNum === 1) {
      return;
    }
    updatePageNumsToShow(page.currentPageNum - 1);
  };

  const goToPrevPageGroup = () => {
    updatePageNumsToShow(pageDetails.pageNumsToShow[0] - 1);
  };

  const goToNextPage = (page) => {
    if (page.currentPageNum === page.finalPageNum) {
      return;
    }
    updatePageNumsToShow(page.currentPageNum + 1);
  };

  const goToNextPageGroup = () => {
    const currentGroup = [...pageDetails.pageNumsToShow];
    updatePageNumsToShow(currentGroup[currentGroup.length - 1] + 1);
  };

  const goToPage = (pageNum) => {
    updatePageNumsToShow(pageNum);
  };

  const renderContent = (page) => {
    return (
      <>
        <StyledNumbers>
          {pageDetails.pageNumsToShow[0] === 1 ? null : (
            <span onClick={() => goToPrevPageGroup()}>...</span>
          )}
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
          {pageDetails.pageNumsToShow[pageDetails.pageNumsToShow.length - 1] ===
          pageDetails.finalPageNum ? null : (
            <span onClick={() => goToNextPageGroup()}>...</span>
          )}
        </StyledNumbers>
        <StyledControllers>
          <span
            className={`prev ${page.currentPageNum === 1 ? 'disabled' : ''}`}
            onClick={() => goToPrevPage(page)}
          >
            Prev
          </span>
          <span>|</span>
          <span
            className={`next ${
              page.currentPageNum === page.finalPageNum ? 'disabled' : ''
            }`}
            onClick={() => goToNextPage(page)}
          >
            Next
          </span>
        </StyledControllers>
      </>
    );
  };

  return (
    <StyledContainer>
      <div className="content">
        <div className="pageMap">
          {`Page ${pageDetails.currentPageNum} of ${pageDetails.finalPageNum}`}
        </div>
        {renderContent(pageDetails)}
      </div>
    </StyledContainer>
  );
};

export default PageNumbers;
