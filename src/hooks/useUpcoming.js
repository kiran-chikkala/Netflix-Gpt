import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const upcoming = useSelector((store) => store.movies.upcoming);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addUpcomingVideo(json.results));
  };

  useEffect(() => {
    !upcoming && getNowPlayingMovies();
  }, []);
};

export default useUpcoming;
