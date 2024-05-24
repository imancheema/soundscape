import React from "react";

const AmbientSounds = ({ ambientSoundList, ambientSoundVolumes, updateVolume }) => {
  const handleVolumeChange = (soundName, event) => {
    const volume = parseFloat(event.target.value);
    console.log(`Volume for ${soundName}:`, volume);
    updateVolume(soundName, volume);

    const audioElement = document.getElementById(soundName);
    if (audioElement) {
      audioElement.volume = volume / 100;
      audioElement.play();
    }
  };

  return (
    <div className="ambient-sounds">
      {ambientSoundList.map((sound) => (
        <div key={sound.name} className="ambient-sound">
          <h2>{sound.name}</h2>
          <audio
            id={sound.name}
            src={sound.url}
            volume={ambientSoundVolumes[sound.name] / 100}
            loop 
          />
          <input
            type="range"
            min="0"
            max="100"
            value={ambientSoundVolumes[sound.name]}
            onChange={(event) => handleVolumeChange(sound.name, event)}
          />
        </div>
      ))}
    </div>
  );
};

export default AmbientSounds;
