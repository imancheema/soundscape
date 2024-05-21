import React, { useEffect } from "react";
import Sound from "react-sound";

function Music({ isPlaying, volume, currentSong, onFinishedPlaying }) {
  useEffect(() => {
    if (window.soundManager) {
      window.soundManager.setup({ debugMode: false });
    }
  }, []);

  return (
    <Sound
      url={currentSong}
      playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
      onFinishedPlaying={onFinishedPlaying}
      volume={volume}
    />
  );
}

export default Music;
