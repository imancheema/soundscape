import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaGithub,
} from "react-icons/fa";
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
    chooseRandomSong();
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    choosePreviousGif();
    choosePreviousSong();
  };

  const handleForward = () => {
    chooseRandomGif();
    chooseRandomSong();
  };

  return (
    <div
      className="study-buddy-app"
      style={{ backgroundImage: `url(${currentBackgroundGif})` }}
    >
      <header className="app-header">
        <div className="repo-link">
          <a
            href="https://github.com/imancheema/studybuddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} /> {/* GitHub icon with link */}
            readme
          </a>
        </div>
        <h1>Study With Me.</h1>
      </header>
      <Music
        isPlaying={isPlaying}
        soundVolume={volume}
        selectedTrack={currentSong}
        onTrackEnd={chooseRandomSong}
      />
      <footer>
        <button onClick={handlePrevious}>
          <FaBackward />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleForward}>
          <FaForward />
        </button>
      </footer>
    </div>
  );
}

export default App;
