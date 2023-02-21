import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledHomePage, StyledSearchBlock } from './styles/HomePage.styled';
import Banner from './Banner';
import MagnifyingGlass from './MagnifyingGlass';
import Loader from './Loader';
import { getResults } from '../apis/rawg';

const HomePage = () => {
  const [bannerGroups, setBannerGroups] = useState([]);
  const [isBannerGroupsLoading, setIsBannerGroupsLoading] = useState(true);

  useEffect(() => {
    const getGames = async (earlierYear, laterYear) => {
      const d = new Date();
      const month =
        d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const currentYear = d.getFullYear().toString();
      const prevYear = (currentYear - 1).toString();
      let dateRange;

      if (!earlierYear && !laterYear) {
        dateRange = `${prevYear}-${month}-${date},${currentYear}-${month}-${date}`;
      } else {
        dateRange = `${earlierYear}-${month}-${date},${laterYear}-${month}-${date}`;
      }

      const apiResponse = await getResults({
        dates: dateRange,
        ordering: '-added',
      });

      console.log(apiResponse);

      const results = apiResponse.data.results;
      const urls = results.map((result) => result.background_image);

      if (bannerGroups.length === 0) {
        setBannerGroups([
          {
            group: 1,
            imageUrls: [...urls],
          },
        ]);
      } else {
        setBannerGroups([
          ...bannerGroups,
          {
            group: 2,
            imageUrls: [...urls],
          },
        ]);
      }
    };

    if (bannerGroups.length === 0) {
      getGames();
    } else if (bannerGroups.length === 1) {
      getGames(2000, 2010);
    } else if (bannerGroups.length === 2) {
      setIsBannerGroupsLoading(false);
    }
  }, [bannerGroups]);

  return (
    <StyledHomePage>
      <Loader status={isBannerGroupsLoading} message={'Loading..'} />
      <section>
        <div className="hero">
          <div className="banner1">
            <Banner bannerGroup={bannerGroups[0]} isReverse={false} />
          </div>
          <div className="content">
            <div className="innerContainer">
              <h1>Game-Fo</h1>
              <p>Welcome to Game-Fo, a video game information database!</p>
              <p>
                Start browsing our selection by clicking below and entering a
                video game title.
              </p>
              <StyledSearchBlock>
                <Link to="/search">
                  <div className="searchBlockContent">
                    <div className="magnifyingGlassContainer">
                      <MagnifyingGlass />
                    </div>
                    <span>Looking for something?</span>
                  </div>
                </Link>
              </StyledSearchBlock>
            </div>
          </div>
          <div className="banner2">
            <Banner bannerGroup={bannerGroups[1]} isReverse={true} />
          </div>
        </div>
      </section>
    </StyledHomePage>
  );
};

export default HomePage;
