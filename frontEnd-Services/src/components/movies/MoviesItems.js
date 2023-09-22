import React, { Fragment, useState } from "react";
import classes from "./MoviesItems.module.css";
import { useHistory } from "react-router-dom";
import APP_CONSTANTS from "../../AppConstants";
import { HiDotsVertical } from "react-icons/hi";
import MovieAddEdit from "./MovieAddEdit";
import DeleteMovie from "./DeleteMovie";

function MoviesItems(props) {
  let { movieId, poster, title, year, geners, voteAverage, runtime, overview } =
    props;
  const [openMoviePop, setOpenMoviePop] = useState(false);
  const [deleteMoviePopUp, setDeleteMoviePopUp] = useState(false);
  const [editedDeleteDetails, setEditedDeleteDetails] = useState();
  const history = useHistory();
  function openMovieDetailsHandler() {
    history.push("/MovieDetails/" + movieId + "");
  }
  function editMovieData(event) {
    setOpenMoviePop(true);
    setEditedDeleteDetails(props);
    console.log(props);
  }
  function deleteMovieData(event) {
    setDeleteMoviePopUp((prev) => !prev);
    console.log(props);
  }

  function openMovieHandler(params) {
    console.log(openMoviePop);
    setOpenMoviePop((values) => !values);
  }

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
              <div className={classes.threeDotIcon}>
                <HiDotsVertical
                  className={classes.editDeleteMovie}
                ></HiDotsVertical>
              </div>
              <div className={classes.cardForEditAndDelete}>
                <ul className={classes.dropdownoptions}>
                  <li onClick={editMovieData}>Edit</li>
                  <li onClick={deleteMovieData}>Delete</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.movieGenercDetails}>{geners.join(",")}</div>
        {openMoviePop && (
          <MovieAddEdit
            name="Edit"
            buttonName="Update"
            closeAddEditMovie={openMovieHandler}
            editDefaultValues={editedDeleteDetails}
          ></MovieAddEdit>
        )}
        {deleteMoviePopUp && (
          <DeleteMovie
            closeMovieModel={deleteMovieData}
            deleteMovie={props}
          ></DeleteMovie>
        )}
      </div>
    </>
  );
}

export default MoviesItems;
