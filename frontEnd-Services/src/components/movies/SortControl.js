import React from "react";
import classes from "./SortControl.module.css";
import { useHistory, useRouteMatch } from "react-router-dom";

function SortControl(props) {
  function sortingHandler(data) {
    props.SortControl(data.target.value);
  }
  return (
    <>
      <div className={classes.sortBy}>
        <label>Sort By</label>
        <select id={classes.sortingDropdown} onChange={sortingHandler}>
          <option
            id="sorting-options"
            selected={props.defaultFilter == "Release Date"}
            value="Release Date"
          >
            Release Date
          </option>
          <option
            id="sorting-options"
            selected={props.defaultFilter == "Title"}
            value="Title"
          >
            Title
          </option>
        </select>
      </div>
    </>
  );
}

export default SortControl;
