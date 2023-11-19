import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    text: "",
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.movieResults = action.payload;
    },
    addText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, addText } =
  gptSlice.actions;

export default gptSlice.reducer;
