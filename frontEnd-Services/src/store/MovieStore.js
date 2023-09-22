import { createSlice } from "@reduxjs/toolkit";

let intialValues = {
  movieListDetails: [],
};

let moviesSlice = createSlice({
  name: "Movie Details",
  initialState: intialValues,
  reducers: {
    getMovieList(state, action) {
      state.movieListDetails = action.payload;
    },
  },
});

export let movieActions = moviesSlice.actions;
export default moviesSlice.reducer;
