import React, { useState, useEffect } from "react";
import "./App.css";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import useBackgroundGifs from "./hooks/useBackgroundGifs";
import Music from "./Music";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(100);
  const {
    currentBackgroundGif,
    currentSong,
    choosePreviousGif,
    chooseRandomGif,
    chooseRandomSong,
    choosePreviousSong,
  } = useBackgroundGifs();

  useEffect(() => {
    chooseRandomGif();
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="study-buddy-app"
      style={{ backgroundImage: `url(${currentBackgroundGif})` }}
    >
      <button
        onClick={() => {
          choosePreviousGif();
          choosePreviousSong();
        }}
      >
        <FaBackward />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button
        onClick={() => {
          chooseRandomGif();
          chooseRandomSong();
        }}
      >
        <FaForward />
      </button>
      <Music
        isPlaying={isPlaying}
        volume={volume}
        currentSong={currentSong}
        onFinishedPlaying={chooseRandomSong}
      />
    </div>
  );
}

export default App;
