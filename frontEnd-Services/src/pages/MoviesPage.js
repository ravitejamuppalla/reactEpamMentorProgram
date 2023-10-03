import React, { useCallback, useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import Movies from "../components/movies/Movies";
import APP_CONSTANTS from "../AppConstants";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/MovieStore";
import { getMoviesWithGenerc } from "../store/MovieStore";

function MoviesPage(props) {
  let searchIinputText = useSelector((data) => data.MovieStore.searchInputText);
  let generecSelect = useSelector((data) => data.MovieStore.genreSelected);
  let sortSelect = useSelector((data) => data.MovieStore.sortingSelected);
  console.log(generecSelect);
  console.log(sortSelect);
  let dispatch = useDispatch();
  let { isLoading, iserror: error, sendRequest } = useHttp();

  function genreSelect(data) {}

  useEffect(() => {
    dispatch(getMoviesWithGenerc(generecSelect));
  }, [generecSelect]);

  return (
    <Movies
      moviesData={useSelector((data) => data.MovieStore.movieListDetails)}
      error={error}
      onSelect={genreSelect}
      loading={isLoading}
    ></Movies>
  );
}

export default MoviesPage;
