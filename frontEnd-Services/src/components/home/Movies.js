import React, { Fragment, useState } from "react";
import classes from "./Movies.module.css";
import Loader from "../../utils/Loader";
import MoviesItems from "./MoviesItems";

function Movies(props) {
  const [isActive, setIsActive] = useState("All");
  function getProductDetailsHandler(event) {
    props.onSelect(event.target.textContent);
    setIsActive(event.target.textContent);
  }

  return (
    <Fragment>
      <div className={classes.MoviesDetails}>
        <div className={classes.MoviesGenercSelector}>
          <div className={classes.genersSelect}>
            <button
              className={isActive == "All" ? classes.active : undefined}
              onClick={getProductDetailsHandler}
            >
              All
            </button>
            <button
              className={
                isActive.includes("Documentary") ? classes.active : undefined
              }
              onClick={getProductDetailsHandler}
            >
              Documentary
            </button>
            <button
              className={
                isActive.includes("Comedy") ? classes.active : undefined
              }
              onClick={getProductDetailsHandler}
            >
              Comedy
            </button>
            <button
              className={
                isActive.includes("Horror") ? classes.active : undefined
              }
              onClick={getProductDetailsHandler}
            >
              Horror
            </button>
            <button
              className={isActive == "Crime" ? classes.active : undefined}
              onClick={getProductDetailsHandler}
            >
              Crime
            </button>
          </div>
        </div>
        <div className={classes.MovieContainer}>
          {props.error && (
            <div className={classes.centerTheText}>
              <p className={classes.errorFailure}>😞{props.error}</p>
            </div>
          )}
          {!props.error &&
            !props.loading &&
            props.moviesData &&
            !props.moviesData.length > 0 && (
              <div className={classes.centerTheText}>
                <p className={classes.errorFailure}>No Results Found..!</p>
              </div>
            )}
          {!props.error && !props.moviesData && (
            <div className={classes.centerTheText}>
              <Loader></Loader>
            </div>
          )}
          {props.moviesData &&
            props.moviesData.length > 0 &&
            props.moviesData.map((values) => {
              return (
                <MoviesItems
                  key={values.id}
                  poster={values.poster_path}
                  title={values.title}
                  year={values.release_date}
                  geners={values.genres}
                ></MoviesItems>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
}

export default Movies;
