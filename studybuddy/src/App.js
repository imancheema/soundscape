import React, { useState, useEffect } from "react";
import "./App.css";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import useBackgroundGifs from "./hooks/useBackgroundGifs";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentBackgroundGif, choosePreviousGif, chooseRandomGif } =
    useBackgroundGifs();

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
      <button onClick={choosePreviousGif}>
        <FaBackward />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={chooseRandomGif}>
        <FaForward />
      </button>
    </div>
  );
}

export default App;
