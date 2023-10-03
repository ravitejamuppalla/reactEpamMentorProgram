import React from "react";
import MovieAddEdit from "../components/movies/MovieAddEdit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { movieActions } from "../store/MovieStore";
import HomePage from "./HomePage";
import DeleteMovie from "../components/movies/DeleteMovie";

function DeleteMoviePage(props) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  function openMovieHandler(params) {
    navigate(-1);
    dispatch(movieActions.toggleOpenCloseMoviePopup());
  }
  return (
    <>
      <HomePage></HomePage>
      <DeleteMovie closeMovieModel={openMovieHandler}></DeleteMovie>
    </>
  );
}

export default DeleteMoviePage;
