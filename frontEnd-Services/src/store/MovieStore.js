import { createSlice, current } from "@reduxjs/toolkit";
import APP_CONSTANTS from "../AppConstants";

let intialValues = {
  movieListDetails: [],
  updateMovieRequest: [],
  reverseOpenCloseMoviePopup: false,
  searchInputText: "",
  movieDetails: {},
  genreSelected: "All",
  sortingSelected: "Release Date",
};

let moviesSlice = createSlice({
  name: "AuthStore",
  initialState: intialValues,
  reducers: {
    setLatestMovies(state, action) {
      state.movieListDetails = action.payload;
    },

    getLatestMovie(state, action) {
      state.updateMovieRequest = action.payload;
    },
    toggleOpenCloseMoviePopup(state, action) {
      state.reverseOpenCloseMoviePopup = !state.reverseOpenCloseMoviePopup;
    },

    setSearchInputText(state, action) {
      state.searchInputText = action.payload;
    },

    movieDetailsForEachMovie(state, action) {
      state.movieDetails = action.payload;
    },

    changeGenercValue(state, action) {
      state.genreSelected = action.payload;
    },
    changeSortingValue(state, action) {
      state.sortingSelected = action.payload;
    },
  },
});

export let movieActions = moviesSlice.actions;
export default moviesSlice.reducer;

export function updateMoviesItems(dataOFItems) {
  return async (dispatch) => {
    let response = await fetch("http://localhost:4000/movies", {
      method: "PUT",
      body: JSON.stringify(dataOFItems),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to Load the request");
    }
    let responseData = await response.json();
    console.log(responseData);
    dispatch(movieActions.getLatestMovie(responseData));
  };
}

export function postMoviesItems(dataOFItems) {
  return async (dispatch) => {
    let response = await fetch("http://localhost:4000/movies", {
      method: "POST",
      body: JSON.stringify(dataOFItems),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to Load the request");
    }
    let responseData = await response.json();
    console.log(responseData);
    dispatch(movieActions.getLatestMovie(responseData));
  };
}

export function DeleteMovieItem(dataOFItems) {
  return async (dispatch) => {
    let response = await fetch("http://localhost:4000/movies/" + dataOFItems, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to Load the request");
    }
  };
}
export function getMovieDetailsByID(dataOFItems) {
  return async (dispatch) => {
    let response = await fetch(APP_CONSTANTS.BASE_URL + "/" + dataOFItems + "");

    if (!response.ok) {
      throw new Error("Failed to Load the request");
    }
    let responseData = await response.json();
    console.log(responseData);
    dispatch(movieActions.movieDetailsForEachMovie(responseData));
  };
}

export function getMovies(dataOFItems) {
  return async (dispatch) => {
    dispatch(movieActions.setSearchInputText(dataOFItems));
    let response = await fetch(
      APP_CONSTANTS.BASE_URL + "?search=" + dataOFItems + "&searchBy=title"
    );

    if (!response.ok) {
      throw new Error("Failed to Load the request");
    }
    let responseData = await response.json();
    console.log(responseData);

    dispatch(movieActions.setLatestMovies(responseData.data));
  };
}
export function getMoviesWithGenerc(dataOFItems) {
  return async (dispatch) => {
    let response;
    if (dataOFItems == "All")
      response = await fetch(APP_CONSTANTS.BASE_URL + "?searchBy=genres");
    else
      response = await fetch(
        APP_CONSTANTS.BASE_URL + "?search=" + dataOFItems + "&searchBy=genres"
      );

    if (!response.ok) {
      throw new Error("Failed to Load the request");
    }
    let responseData = await response.json();
    console.log(responseData);

    dispatch(movieActions.setLatestMovies(responseData.data));
  };
}
