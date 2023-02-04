import React, { useState, useEffect, useContext } from 'react';
import {
  StyledContainer,
  StyledPageController,
} from './styles/PageNumbers.styled';
import { ResponseContext } from './Layout';

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
  const responseContextValue = useContext(ResponseContext);

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

  // *************************
  // About setNewPageDetails
  // *************************
  // - Responsible setting pageDetails whenever a new search term is submitted.
  // - This includes setting the current range of numbers displayed at the bottom
  //   of the page.
  useEffect(() => {
    const setNewPageDetails = (page) => {
      const totalPageNumsToShow = 5;
      const finalPageNum = Math.ceil(
        responseDetails.resultsFound / pageDetails.resultsPerPage
      );
      const currentRangeNums = pageDetails.pageNumsToShow;
      let newPageNumsToShow = [];

      if (currentRangeNums.length === 0) {
        for (let i = 0; i < totalPageNumsToShow; i++) {
          if (i + 1 <= finalPageNum) {
            newPageNumsToShow[i] = i + 1;
          } else {
            break;
          }
        }
        setPageDetails({
          ...pageDetails,
          currentPageNum: page,
          finalPageNum: finalPageNum,
          pageNumsToShow: [...newPageNumsToShow],
        });
      }
    };

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

    if (responseDetails.resultsFound === null) {
      return;
    }

    if (responseDetails.currentPageRequested !== null) {
      if (pageDetails.pageNumsToShow.length === 0) {
        setNewPageDetails(responseDetails.currentPageRequested);
      } else {
        updatePageNumsToShow(responseDetails.currentPageRequested);
      }
    }
  }, [responseDetails]);

  useEffect(() => {
    console.log(pageDetails);
  }, [pageDetails]);

  const goToPrevPage = (term, page) => {
    setPageDetails({
      ...page,
      prevCurrentPageNum: page.currentPageNum,
    });
    responseContextValue.onResponseChange(term, page.currentPageNum - 1);
  };

  const goToNextPage = (term, page) => {
    setPageDetails({
      ...page,
      prevCurrentPageNum: page.currentPageNum,
    });
    responseContextValue.onResponseChange(term, page.currentPageNum + 1);
  };

  const renderContent = (page) => {
    return (
      <>
        <StyledPageController
          className={`prev ${page.currentPageNum === 1 ? 'hidden' : ''}`}
        >
          <span
            onClick={() =>
              goToPrevPage(responseDetails.currentSearchedTerm, page)
            }
          >
            Prev
          </span>
        </StyledPageController>
        <div className={'pageNumbers'}>
          {page.pageNumsToShow.map((num, index) => (
            <span
              key={index}
              className={`${
                num !== pageDetails.currentPageNum ? 'inactive' : 'active'
              }`}
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
          <span
            onClick={() =>
              goToNextPage(responseDetails.currentSearchedTerm, page)
            }
          >
            Next
          </span>
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
