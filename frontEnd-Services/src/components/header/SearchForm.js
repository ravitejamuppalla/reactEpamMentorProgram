import React, { Fragment, useRef } from "react";
import classes from "./SearchForm.module.css";

function SearchForm(props) {
  let { searchTextData, defaultSearch } = props;
  let searchInput = useRef();
  function getInputHandler() {
    searchTextData(searchInput.current.value);
  }
  return (
    <>
      <div className={classes.Search_Section}>
        <h1>Find Your Movie</h1>
        <div className={classes.input_Section}>
          <input
            placeholder="What do you want to watch?"
            ref={searchInput}
            defaultValue={defaultSearch}
          ></input>
          <button onClick={getInputHandler}>Search</button>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
