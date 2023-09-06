import React, { Fragment } from "react";
import MoviesDetails from "../components/movies/MoviesDetails";
import { useParams } from "react-router-dom";
import MoviesPage from "./MoviesPage";

function MovieDetailsPage(props) {
  let params = useParams();
  return (
    <Fragment>
      <MoviesDetails MovieId={params.MovieID}></MoviesDetails>
      <MoviesPage></MoviesPage>
    </Fragment>
  );
}

export default MovieDetailsPage;
