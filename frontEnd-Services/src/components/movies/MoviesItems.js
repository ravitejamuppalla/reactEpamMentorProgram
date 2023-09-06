import React, { Fragment } from "react";
import classes from "./MoviesItems.module.css";
import { useHistory } from "react-router-dom";
import APP_CONSTANTS from "../../AppConstants";

function MoviesItems(props) {
  let { movieId, poster, title, year, geners } = props;
  const history = useHistory();
  function openMovieDetailsHandler() {
    history.push("/MovieDetails/" + movieId + "");
  }

  return (
    <>
      <div className={classes.MovieItemCard} onClick={openMovieDetailsHandler}>
        <img
          src={poster ? poster : APP_CONSTANTS.DEFAULTIMAGE}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = APP_CONSTANTS.DEFAULTIMAGE;
          }}
        ></img>
        <div className={classes.MovieDetails}>
          <p className={classes.movieTitle}>{title}</p>
          <span className={classes.movieYear}> {year.split("-")[0]}</span>
        </div>
        <div className={classes.movieGenercDetails}>{geners.join(",")}</div>
      </div>
    </>
  );
}

export default MoviesItems;
