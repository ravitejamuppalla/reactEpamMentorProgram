import React, { Fragment, useEffect, useState } from "react";
import Header from "../header/Header";
import Movies from "./Movies";
import useHttp from "../../hooks/useHttp";

function Home(props) {
  let defaultSearchInput = "Avengers";
  const [movies, setMovies] = useState();
  const [searchInput, setSearchInput] = useState("");
  let { isLoading, iserror: error, sendRequest } = useHttp();

  function searchInputText(inputText) {
    setSearchInput(inputText);
  }
  function genreSelect(data) {
    let requestconfig;
    async function getProductData() {
      if (data == "All")
        requestconfig = {
          url: "http://localhost:4000/movies?searchBy=genres",
        };
      else
        requestconfig = {
          url:
            "http://localhost:4000/movies?search=" + data + "&searchBy=genres",
        };

      await sendRequest(requestconfig, getProductResponse);
    }
    getProductData();
  }

  function getProductResponse(data) {
    if (data) setMovies(data.data);
  }

  useEffect(() => {
    async function getProductData() {
      let requestconfig = {
        url:
          "http://localhost:4000/movies?search=" +
          searchInput +
          "&searchBy=title",
      };
      await sendRequest(requestconfig, getProductResponse);
    }
    getProductData();
  }, [searchInput]);

  return (
    <Fragment>
      <Header
        searchTextData={searchInputText}
        defaultSearch={searchInput}
      ></Header>
      <Movies
        moviesData={movies}
        error={error}
        onSelect={genreSelect}
        loading={isLoading}
      ></Movies>
    </Fragment>
  );
}

export default Home;
