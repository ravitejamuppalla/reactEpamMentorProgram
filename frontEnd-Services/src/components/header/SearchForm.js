import React, { Fragment, useRef } from "react";
import classes from "./SearchForm.module.css";

function SearchForm(props) {
  let searchInput = useRef();

  function getInputHandler() {
    props.searchTextData(searchInput.current.value);
  }
  return (
    <Fragment>
      <div className={classes.Search_Section}>
        <h1>Find Your Movie</h1>
        <div className={classes.input_Section}>
          <input
            placeholder="What do you want to watch?"
            ref={searchInput}
            defaultValue={props.defaultSearch}
          ></input>
          <button onClick={getInputHandler}>Search</button>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchForm;
