import React from "react";
import classes from "./SortControl.module.css";

function SortControl(props) {
  return (
    <>
      <div className={classes.sortBy}>
        <label>Sort By</label>
        <select id={classes.sortingDropdown}>
          <option value="Release Date">Release Date</option>
          <option value="Title">Title</option>
        </select>
      </div>
    </>
  );
}

export default SortControl;
