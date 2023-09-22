import React, { useState } from "react";
import classes from "./Movies.module.css";
import SortControl from "./SortControl";

function GenercMoviesSelect(props) {
  const [isActive, setIsActive] = useState("All");
  function getProductDetailsHandler(event) {
    props.onSelect(event.target.textContent);
    setIsActive(event.target.textContent);
  }
  function sortByHandler(data) {
    props.SortControlData(data);
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
        <SortControl
          SortControl={sortByHandler}
          defaultFilter={props.sortByDefault}
        ></SortControl>
      </div>
    </>
  );
}

export default GenercMoviesSelect;
