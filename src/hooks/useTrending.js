import React, { useEffect } from "react";
import { addTreandingVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTrending = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addTreandingVideo(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useTrending;
