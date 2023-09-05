import React, { Fragment } from "react";
import classes from "./MoviesItems.module.css";

function MoviesItems(props) {
  let defaultImage =
    "https://www.shutterstock.com/image-photo/avengers-station-london-february-2019-260nw-1359859739.jpg";
  console.log(props);
  return (
    <Fragment>
      <div className={classes.MovieItemCard}>
        <img
          src={props.poster ? props.poster : defaultImage}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = defaultImage;
          }}
        ></img>
        <div className={classes.MovieDetails}>
          <p className={classes.movieTitle}>{props.title}</p>
          <span className={classes.movieYear}> {props.year.split("-")[0]}</span>
        </div>
        <div className={classes.movieGenercDetails}>
          {props.geners
            .map((values) => {
              return values;
            })
            .join(",")}
        </div>
      </div>
    </Fragment>
  );
}

export default MoviesItems;
