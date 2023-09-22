import React, { Fragment } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

function RouterPath() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/Home" exact>
          <Redirect to="/"></Redirect>
        </Route>
        <Route path="/MovieDetails/:MovieID" exact>
          <MovieDetailsPage></MovieDetailsPage>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default RouterPath;
