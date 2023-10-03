import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/header/Header";
import useHttp from "../hooks/useHttp";
import MoviesPage from "./MoviesPage";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/MovieStore";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getMovies } from "../store/MovieStore";

let addParamsOnlyOnce = true;
function HomePage(props) {
  let defaultSearchInput = "Avengers";
  let defaultSortBy = useSelector((data) => data.MovieStore.sortingSelected);
  let defaultGenre = useSelector((data) => data.MovieStore.genreSelected);
  const history = useNavigate();
  let dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  function searchInputText(inputText) {
    setSearchParams({
      genre: searchParams.get("genre"),
      sortBy: searchParams.get("sortBy"),
      query: inputText,
    });

    dispatch(getMovies(inputText));
  }

  useEffect(() => {
    if (addParamsOnlyOnce) {
      history(`?genre=${defaultGenre}&sortBy=${defaultSortBy}`);
      addParamsOnlyOnce = false;
    }
  }, []);

  return (
    <Fragment>
      <Header
        searchTextData={searchInputText}
        defaultSearch={searchInput}
      ></Header>
      <MoviesPage></MoviesPage>
    </Fragment>
  );
}

export default HomePage;
