import React, { useEffect, useState } from "react";
import classes from "./Movies.module.css";
import SortControl from "./SortControl";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/MovieStore";

function GenercMoviesSelect(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const generecDefault = useSelector((data) => data.MovieStore.genreSelected);
  const [isActive, setIsActive] = useState(generecDefault);
  function getProductDetailsHandler(event) {
    setSearchParams({
      genre: event.target.textContent,
      sortBy: searchParams.get("sortBy")
        ? searchParams.get("sortBy")
        : "Release Date",
    });
    dispatch(movieActions.changeGenercValue(event.target.textContent));
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
