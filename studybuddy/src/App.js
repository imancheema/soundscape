import React, { useState } from "react";
import "./App.css";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

function App() {
  // Use React's useState hook to manage play/pause
  // By default, the music isnt playing
  // isPlaying: holds current value of state
  // setIsPlaying: update isPlaying value when you call on it.
  const [isPlaying, setIsPlaying] = useState(false);

  // When you click on the button, isPlaying is set to the opposite of its current value
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // When you click on the backward button,
  const playPreviousSong = () => {
    // Go back to prev. gif background, song, and quote
    console.log("previous song.");
  };

  // When you click on the forward button,
  const playNextSong = () => {
    // Change the gif background, song, and quote (randomized)
    console.log("next song.");
  };

  return (
    <div className="study-buddy-app">
      <button onClick={playPreviousSong}>
        <FaBackward />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={playNextSong}>
        <FaForward />
      </button>
    </div>
  );
}

export default App;
