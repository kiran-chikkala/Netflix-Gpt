import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
const useSearchMoveis = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store?.gpt?.text);
  const FetchApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        store +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addGptMovieResult(json?.results));
  };
  useEffect(() => {
    FetchApi();
  }, [store]);
};

export default useSearchMoveis;
