import { useEffect, useState } from "react";

const useBackgroundGifs = () => {
  const [backgroundGifList, setBackgroundGifList] = useState([]);
  const [currentBackgroundGifIndex, setCurrentBackgroundGifIndex] = useState(0);
  const [previousBackgroundGifIndex, setPreviousBackgroundGifIndex] =
    useState(null);

  useEffect(() => {
    const fetchGifs = async () => {
      const response = await fetch("/gifs.json");
      const data = await response.json();
      setBackgroundGifList(data.gifs);
    };

    fetchGifs();
  }, []);

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

  return {
    currentBackgroundGif: backgroundGifList[currentBackgroundGifIndex],
    chooseRandomGif,
    choosePreviousGif,
  };
};

export default useBackgroundGifs;
