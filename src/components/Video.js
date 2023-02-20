import React, { useState, useEffect, useRef } from 'react';
import { StyledVideo } from './styles/Video.styled';

const Video = ({ trailer }) => {
  const [gameTrailer, setGameTrailer] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (trailer.id === null) {
      return;
    } else {
      setGameTrailer({ ...trailer });
    }
  }, [trailer]);

  const updateIsVideoPlaying = (playStatus) => {
    setIsPlaying(!playStatus);
  };

  return Object.keys(gameTrailer).length === 0 ? null : (
    <StyledVideo>
      {isPlaying ? null : (
        <div className="imageContainer">
          <figure>
            <img src={gameTrailer.preview} alt={gameTrailer.name} />
          </figure>
        </div>
      )}
      <video
        ref={videoRef}
        className="video"
        controls
        src={gameTrailer.data.max}
        type="video/mp4"
        onPlay={() => updateIsVideoPlaying(isPlaying)}
        onPause={() => updateIsVideoPlaying(isPlaying)}
      ></video>
    </StyledVideo>
  );
};

export default Video;
