import React, { Fragment, useState } from "react";
import classes from "./Movies.module.css";
import Loader from "../../utils/Loader";
import MoviesItems from "./MoviesItems";
import GenercMoviesSelect from "./GenercMoviesSelect";
import SortControl from "./SortControl";
import { useHistory, useRouteMatch, useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { movieActions } from "../../store/MovieStore";

function Movies(props) {
  let dispatch = useDispatch();
  let { error, loading, moviesData, onSelect } = props;

  let movieListSortedList;
  const [searchParams, setSearchParams] = useSearchParams();
  const sortDefaultValue = searchParams.get("sortBy")
    ? searchParams.get("sortBy")
    : "Release Date";

  const [sortDefault, setDefaultsort] = useState(sortDefaultValue);

  function showMoviesDetails() {
    return !error && !loading && moviesData && !(moviesData.length > 0);
  }
  function sortingByHandler(data) {
    setSearchParams({
      genre: searchParams.get("genre"),
      sortBy: data,
    });

    if (searchParams.get("query"))
      setSearchParams({
        genre: searchParams.get("genre"),
        sortBy: data,
        query: searchParams.get("query") ? searchParams.get("query") : "null",
      });
    dispatch(movieActions.changeSortingValue(data));
    setDefaultsort(data);
  }

  if (moviesData && moviesData.length > 0) {
    if (sortDefault == "Release Date") {
      movieListSortedList = moviesData.slice().sort((a, b) => {
        let isreversed = sortDefault === "Release Date" ? 1 : -1;
        return isreversed * a.release_date.localeCompare(b.release_date);
      });
    } else {
      movieListSortedList = moviesData.slice().sort((a, b) => {
        let isreversed = sortDefault === "Title" ? 1 : -1;
        return isreversed * a.title.localeCompare(b.title);
      });
    }
  }
  return (
    <>
      <div className={classes.MoviesDetails}>
        <div>
          <GenercMoviesSelect
            onSelect={onSelect}
            SortControlData={sortingByHandler}
            sortByDefault={sortDefault}
          ></GenercMoviesSelect>
        </div>
        <div className={classes.MovieContainer}>
          {error && (
            <div className={classes.centerTheText}>
              <p className={classes.errorFailure}>😞{error}</p>
            </div>
          )}
          {showMoviesDetails() && (
            <div className={classes.centerTheText}>
              <p className={classes.errorFailure}>No Results Found..!</p>
            </div>
          )}
          {!error && !movieListSortedList && (
            <div className={classes.centerTheText}>
              <Loader></Loader>
            </div>
          )}
          {movieListSortedList &&
            movieListSortedList.length > 0 &&
            movieListSortedList.map((values) => {
              return (
                <MoviesItems
                  key={values.id}
                  movieId={values.id}
                  poster={values.poster_path}
                  title={values.title}
                  year={values.release_date}
                  geners={values.genres}
                  voteAverage={values.vote_average}
                  runtime={values.runtime}
                  overview={values.overview}
                  overAllData={values}
                ></MoviesItems>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Movies;
