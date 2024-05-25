import React, { useState } from "react";
import "./App.css";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import useBackgroundGifs from "./hooks/useBackgroundGifs";
import Music from "./Music";
import AmbientSounds from "./AmbientSounds";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const {
    currentBackgroundGif,
    currentSong,
    choosePreviousGif,
    chooseRandomGif,
    chooseRandomSong,
    choosePreviousSong,
    ambientSoundList,
    ambientSoundVolumes,
    updateVolume,
  } = useBackgroundGifs();

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
        <div className="left-section">
          <div className="repo-link">
            <a
              href="https://github.com/imancheema/studybuddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.
            </a>
          </div>
          <h1>Lofi Radio ⋆｡─ ⋆⋅✧⋅⋆｡</h1>
        </div>
      </header>
      <AmbientSounds
        ambientSoundList={ambientSoundList}
        ambientSoundVolumes={ambientSoundVolumes}
        updateVolume={updateVolume}
      />
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
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          style={{
            background: "pink",
            border: "1px solid pink",
            padding: "2px",
            height: "1px",
            borderRadius: "30px",
            WebkitAppearance: "none",
          }}
        />
      </footer>
    </div>
  );
}

export default App;
