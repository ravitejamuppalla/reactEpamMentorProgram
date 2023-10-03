import React, { Fragment, useState } from "react";
import classes from "./MoviesItems.module.css";
import { useHistory, useNavigate } from "react-router-dom";
import APP_CONSTANTS from "../../AppConstants";
import { HiDotsVertical } from "react-icons/hi";
import MovieAddEdit from "./MovieAddEdit";
import DeleteMovie from "./DeleteMovie";
import { useDispatch } from "react-redux";
import { movieActions } from "../../store/MovieStore";
import { getMovieDetailsByID } from "../../store/MovieStore";

function MoviesItems(props) {
  let { movieId, poster, title, year, geners, voteAverage, runtime, overview } =
    props;
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [openMoviePop, setOpenMoviePop] = useState(false);
  const [deleteMoviePopUp, setDeleteMoviePopUp] = useState(false);
  const [editedDeleteDetails, setEditedDeleteDetails] = useState();
  const [openEditDeleteDetails, setOpenEditDeleteDetails] = useState(false);
  function openMovieDetailsHandler() {
    dispatch(getMovieDetailsByID(movieId));
    navigate("/MovieDetails/" + movieId + "");
  }
  function editMovieData(event) {
    console.log(movieId);
    dispatch(getMovieDetailsByID(movieId));
    navigate("/MovieDetails/" + movieId + "/EditMovie");
    // setOpenMoviePop(true);
    // setEditedDeleteDetails(props);
    // console.log(props);
  }
  function deleteMovieData(event) {
    dispatch(getMovieDetailsByID(movieId));
    navigate("/MovieDetails/" + movieId + "/DeleteMovie");
    // setDeleteMoviePopUp((prev) => !prev);
    // console.log(props);
  }

  function openMovieHandler(params) {
    console.log(openMoviePop);
    setOpenMoviePop((values) => !values);
  }

  function openEditDeleteHandler(event) {
    setOpenEditDeleteDetails((prev) => !prev);
  }

  let classesNameForDisplay = openEditDeleteDetails
    ? "displayBlock"
    : "displayNone";

  return (
    <>
      <div className={classes.MovieItemCard}>
        <img
          src={poster ? poster : APP_CONSTANTS.DEFAULTIMAGE}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = APP_CONSTANTS.DEFAULTIMAGE;
          }}
          onClick={openMovieDetailsHandler}
        ></img>
        <div className={classes.MovieDetails}>
          <p className={classes.movieTitle}>{title}</p>
          <div className={classes.MovieDetailsLeft}>
            <span className={classes.movieYear}> {year.split("-")[0]}</span>

            <div className={classes.iconforDelete}>
              <div
                className={classes.threeDotIcon}
                onClick={openEditDeleteHandler}
              >
                <HiDotsVertical
                  className={classes.editDeleteMovie}
                ></HiDotsVertical>
              </div>
              <div
                className={`${classes["cardForEditAndDelete"]} ${classes[classesNameForDisplay]}`}
              >
                <ul className={classes.dropdownoptions}>
                  <li onClick={editMovieData}>Edit</li>
                  <li onClick={deleteMovieData}>Delete</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.movieGenercDetails}>{geners.join(",")}</div>
      </div>
    </>
  );
}

export default MoviesItems;
