import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const jsonData = await data.json();
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
