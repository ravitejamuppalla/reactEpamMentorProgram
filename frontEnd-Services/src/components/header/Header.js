import React, { Fragment, useEffect, useState } from "react";
import classes from "./Header.module.css";
import SearchForm from "./SearchForm";
import APP_CONSTANTS from "../../AppConstants";

function Header(props) {
  let { searchTextData, defaultSearch } = props;

  return (
    <Fragment>
      <div className={classes.Header_Section}>
        <div className={classes.HeaderIcon}>
          <h1>
            netflix<span>roulette</span>
          </h1>
          <button className={classes.AddMovie}>
            + {APP_CONSTANTS.ADDMOVIE}
          </button>
        </div>
        <div>
          <SearchForm
            searchTextData={searchTextData}
            defaultSearch={defaultSearch}
          ></SearchForm>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
