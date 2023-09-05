import React, { Fragment, useEffect, useState } from "react";
import classes from "./Header.module.css";
import SearchForm from "./SearchForm";

function Header(props) {
  return (
    <Fragment>
      <div className={classes.Header_Section}>
        <div className={classes.HeaderIcon}>
          <h1>
            netflix<span>roulette</span>
          </h1>
          <button className={classes.AddMovie}> + Add Movie</button>
        </div>
        <div>
          <SearchForm
            searchTextData={props.searchTextData}
            defaultSearch={props.defaultSearch}
          ></SearchForm>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
