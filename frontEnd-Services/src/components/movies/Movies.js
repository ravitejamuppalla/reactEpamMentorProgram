import React, { Fragment, useState } from "react";
import classes from "./Movies.module.css";
import Loader from "../../utils/Loader";
import MoviesItems from "./MoviesItems";
import GenercMoviesSelect from "./GenercMoviesSelect";

function Movies(props) {
  let { error, loading, moviesData, onSelect } = props;

  function showMoviesDetails() {
    return !error && !loading && moviesData && !(moviesData.length > 0);
  }

  return (
    <>
      <div className={classes.MoviesDetails}>
        <GenercMoviesSelect onSelect={onSelect}></GenercMoviesSelect>
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
          {!error && !moviesData && (
            <div className={classes.centerTheText}>
              <Loader></Loader>
            </div>
          )}
          {moviesData &&
            moviesData.length > 0 &&
            moviesData.map((values) => {
              return (
                <MoviesItems
                  key={values.id}
                  movieId={values.id}
                  poster={values.poster_path}
                  title={values.title}
                  year={values.release_date}
                  geners={values.genres}
                ></MoviesItems>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Movies;
