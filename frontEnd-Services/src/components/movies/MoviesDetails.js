import React, { Fragment, useEffect, useState } from "react";
import classes from "./MoviesDetails.module.css";
import { HiSearch } from "react-icons/hi";
import useHttp from "../../hooks/useHttp";
import { Link } from "react-router-dom";
import APP_CONSTANTS from "../../AppConstants";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/MovieStore";
import { getMovieDetailsByID } from "../../store/MovieStore";

function MoviesDetails(props) {
  console.log(props);
  let dispatch = useDispatch();
  let MovieDetails = useSelector((data) => data.MovieStore.movieDetails);
  let { isLoading, iserror: error, sendRequest } = useHttp();
  // const [MovieDetails, SetMovieDetails] = useState();

  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${padToTwoDigits(hours)}H ${padToTwoDigits(minutes)}M`;
  }

  function padToTwoDigits(num) {
    return num.toString().padStart(2, "0");
  }
  // function getMovieUniqueResponse(data) {
  //   SetMovieDetails(data);
  // }

  // useEffect(() => {
  //   async function getMoviesDetailsWithID() {
  //     dispatch(getMovieDetailsByID(props.MovieId));
  //     // let requestconfig = {
  //     //   url: APP_CONSTANTS.BASE_URL + "/" + props.MovieId + "",
  //     // };
  //     // await sendRequest(requestconfig, getMovieUniqueResponse);
  //   }
  //   getMoviesDetailsWithID();
  // }, [props.MovieId]);

  console.log(MovieDetails);
  return (
    <Fragment>
      <div className={classes.Header_Section}>
        <div className={classes.HeaderIcon}>
          <Link to="/">
            <h1>
              netflix<span>roulette</span>
            </h1>
          </Link>
          <div className={classes.formFeild}>
            <input className={classes.formInputFeild}></input>
            <HiSearch className={classes.searchIcon}></HiSearch>
          </div>
        </div>
        {MovieDetails && !(MovieDetails.length == 0) && (
          <div className={classes.movieDetails}>
            <div className={classes.MovieImg}>
              <img
                src={
                  MovieDetails.poster_path
                    ? MovieDetails.poster_path
                    : APP_CONSTANTS.DEFAULTIMAGE
                }
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = APP_CONSTANTS.DEFAULTIMAGE;
                }}
              ></img>
            </div>
            <div className={classes.movieDetailsData}>
              <div className={classes.MovieTitleAndAverage}>
                <h1>{MovieDetails.title}</h1>
                <div className={classes.averageVote}>
                  <p> {MovieDetails.vote_average}</p>
                </div>
              </div>
              <div className={classes.MovieDetailsGeneres}>
                {MovieDetails.genres ? MovieDetails.genres.join(",") : ""}
              </div>
              <div className={classes.MovieYearAndTime}>
                <p>
                  {MovieDetails.release_date
                    ? MovieDetails.release_date.split("-")[0]
                    : ""}
                </p>
                <p>{toHoursAndMinutes(MovieDetails.runtime)}</p>
              </div>
              <p className={classes.OverView}>{MovieDetails.overview}</p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default MoviesDetails;
