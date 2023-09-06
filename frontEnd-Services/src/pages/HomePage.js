import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/header/Header";
import useHttp from "../hooks/useHttp";
import MoviesPage from "./MoviesPage";

function HomePage(props) {
  let defaultSearchInput = "Avengers";
  const [searchInput, setSearchInput] = useState("");

  function searchInputText(inputText) {
    setSearchInput(inputText);
  }

  return (
    <Fragment>
      <Header
        searchTextData={searchInputText}
        defaultSearch={searchInput}
      ></Header>
      <MoviesPage searchText={searchInput}></MoviesPage>
    </Fragment>
  );
}

export default HomePage;
