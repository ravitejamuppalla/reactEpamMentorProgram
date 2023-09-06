import React, { useState } from "react";
import classes from "./Movies.module.css";

function GenercMoviesSelect(props) {
  const [isActive, setIsActive] = useState("All");
  function getProductDetailsHandler(event) {
    props.onSelect(event.target.textContent);
    setIsActive(event.target.textContent);
  }
  return (
    <>
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
            className={isActive.includes("Comedy") ? classes.active : undefined}
            onClick={getProductDetailsHandler}
          >
            Comedy
          </button>
          <button
            className={isActive.includes("Horror") ? classes.active : undefined}
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
    </>
  );
}

export default GenercMoviesSelect;
