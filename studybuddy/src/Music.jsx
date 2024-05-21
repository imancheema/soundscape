import React, { useEffect } from "react";
import SoundComponent from "react-sound"; 

const CustomMusicPlayer = ({ isPlaying, soundVolume, selectedTrack, onTrackEnd }) => {
  useEffect(() => {
    if (window.soundManager) {
      window.soundManager.setup({ debugMode: false });
    }
  }, []);

  return (
    <SoundComponent
      url={selectedTrack}
      playStatus={isPlaying ? SoundComponent.status.PLAYING : SoundComponent.status.PAUSED}
      onFinishedPlaying={onTrackEnd}
      volume={soundVolume}
    />
  );
};

export default CustomMusicPlayer;
