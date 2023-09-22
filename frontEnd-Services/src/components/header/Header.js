import React, { Fragment, useEffect, useState } from "react";
import classes from "./Header.module.css";
import SearchForm from "./SearchForm";
import APP_CONSTANTS from "../../AppConstants";
import MovieAddEdit from "../movies/MovieAddEdit";

function Header(props) {
  let { searchTextData, defaultSearch } = props;
  const [openMoviePop, setOpenMoviePop] = useState(false);
  function openMovieHandler(params) {
    setOpenMoviePop((values) => !values);
  }

  return (
    <Fragment>
      <div className={classes.Header_Section}>
        <div className={classes.HeaderIcon}>
          <h1>
            netflix<span>roulette</span>
          </h1>
          <button className={classes.AddMovie} onClick={openMovieHandler}>
            + {APP_CONSTANTS.ADDMOVIE}
          </button>
        </div>
        <div>
          <SearchForm
            searchTextData={searchTextData}
            defaultSearch={defaultSearch}
          ></SearchForm>
        </div>
        {openMoviePop && (
          <MovieAddEdit
            name="Add"
            buttonName="Submit"
            closeAddEditMovie={openMovieHandler}
          ></MovieAddEdit>
        )}
      </div>
    </Fragment>
  );
}

export default Header;
