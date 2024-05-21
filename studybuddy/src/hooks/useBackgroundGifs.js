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
    fetchGifs();
    fetchSongs();
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

  return {
    currentBackgroundGif: backgroundGifList[currentBackgroundGifIndex],
    currentSong: songsList[currentSongIndex],
    chooseRandomGif,
    choosePreviousGif,
    chooseRandomSong,
    choosePreviousSong,
  };
};

export default useBackgroundGifs;
