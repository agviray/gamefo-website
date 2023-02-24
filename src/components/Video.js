import React, { useState, useEffect, useRef } from 'react';
import { StyledVideo } from './styles/Video.styled';

const Video = ({ trailer }) => {
  const [gameTrailer, setGameTrailer] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (isPlaying === true) {
      videoElement.play();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (trailer.id === null) {
      return;
    } else {
      setGameTrailer({ ...trailer });
    }
  }, [trailer]);

  const activateInitialPlay = () => {
    setIsPlaying(true);
  };

  return Object.keys(gameTrailer).length === 0 ? null : (
    <StyledVideo>
      <video
        ref={videoRef}
        className="video"
        controls
        src={gameTrailer.data.max}
        type="video/mp4"
      ></video>
      {isPlaying ? null : (
        <div onClick={activateInitialPlay} className="overlay">
          <div className="playSymbol"></div>
        </div>
      )}
    </StyledVideo>
  );
};

export default Video;
