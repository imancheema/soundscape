import { useEffect, useState } from "react";

const useBackgroundGifs = () => {
  // Gifs
  const [backgroundGifList, setBackgroundGifList] = useState([]);
  const [currentBackgroundGifIndex, setCurrentBackgroundGifIndex] = useState(0);
  const [previousBackgroundGifIndex, setPreviousBackgroundGifIndex] =
    useState(null);

  // Songs
  const [songsList, setSongsList] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [previousSongIndex, setPreviousSongIndex] = useState(null);

  // Ambient Sounds
  const [ambientSoundList, setAmbientSoundList] = useState([]);
  const [ambientSoundVolumes, setAmbientSoundVolumes] = useState({});

  useEffect(() => {
    // Gifs
    const fetchGifs = async () => {
      try {
        const response = await fetch("/gifs.json");
        const data = await response.json();
        setBackgroundGifList(data.gifs);
        console.log("Fetched GIFs: ", data.gifs);
      } catch (error) {
        console.error("Error fetching GIFs: ", error);
      }
    };

    // Songs
    const fetchSongs = async () => {
      try {
        const response = await fetch("/songs.json");
        const data = await response.json();
        setSongsList(data.songs);
        console.log("Fetched Songs: ", data.songs);
      } catch (error) {
        console.error("Error fetching songs: ", error);
      }
    };

    const fetchAmbientSounds = async () => {
      try {
        const response = await fetch("/ambience.json");
        const data = await response.json();
        setAmbientSoundList(data.ambience);
        const initialVolumes = {};
        data.ambience.forEach((sound) => {
          initialVolumes[sound.name] = 0;
        });
        setAmbientSoundVolumes(initialVolumes);
        console.log("Fetched Ambient Sounds: ", data.ambience);
      } catch (error) {
        console.error("Error fetching ambient sounds: ", error);
      }
    };

    fetchGifs();
    fetchSongs();
    fetchAmbientSounds();
  }, []);

  // Gifs
  const chooseRandomGif = () => {
    const randomIndex = Math.floor(Math.random() * backgroundGifList.length);
    setPreviousBackgroundGifIndex(currentBackgroundGifIndex);
    setCurrentBackgroundGifIndex(randomIndex);
  };

  const choosePreviousGif = () => {
    if (previousBackgroundGifIndex !== null) {
      setCurrentBackgroundGifIndex(previousBackgroundGifIndex);
    }
  };

  // Songs
  const chooseRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songsList.length);
    setPreviousSongIndex(currentSongIndex);
    setCurrentSongIndex(randomIndex);
    console.log("Selected Song Index: ", randomIndex);
    console.log("Current Song: ", songsList[randomIndex]);
  };

  const choosePreviousSong = () => {
    if (previousSongIndex !== null) {
      setCurrentSongIndex(previousSongIndex);
    }
  };

  const updateVolume = (soundName, volume) => {
    setAmbientSoundVolumes((prevVolumes) => ({
      ...prevVolumes,
      [soundName]: volume,
    }));
  };

  return {
    currentBackgroundGif: backgroundGifList[currentBackgroundGifIndex],
    currentSong: songsList[currentSongIndex],
    chooseRandomGif,
    choosePreviousGif,
    chooseRandomSong,
    choosePreviousSong,
    ambientSoundList,
    ambientSoundVolumes,
    updateVolume,
  };
};

export default useBackgroundGifs;
