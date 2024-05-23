import React, { useState } from "react";

const TestAudioPlayback = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle audio playback
  const togglePlayback = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <audio src="/ambience/rain.mp3" controls={true} autoPlay={isPlaying} />
      <button onClick={togglePlayback}>
        {isPlaying ? "Pause Audio" : "Play Audio"}
      </button>
    </div>
  );
};

export default TestAudioPlayback;
