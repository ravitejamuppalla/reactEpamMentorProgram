import React, { Fragment } from "react";
import MoviesDetails from "../components/movies/MoviesDetails";
import { useParams } from "react-router-dom";
import MoviesPage from "./MoviesPage";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

function MovieDetailsPage(props) {
  let params = useParams();
  console.log("THe movie details Page");

  return (
    <Fragment>
      <MoviesDetails></MoviesDetails>
      <MoviesPage></MoviesPage>
    </Fragment>
  );
}

export default MovieDetailsPage;
