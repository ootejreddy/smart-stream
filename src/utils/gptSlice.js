import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGPTSearch: false,
    gptMovieResult: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.gptMovieResult = movieResults;
    },
  },
});

export const { toggleGPTSearch, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
