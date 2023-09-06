import React, { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import Movies from "../components/movies/Movies";
import APP_CONSTANTS from "../AppConstants";

function MoviesPage(props) {
  const [movies, setMovies] = useState();
  let { isLoading, iserror: error, sendRequest } = useHttp();
  function getProductResponse(data) {
    if (data) setMovies(data.data);
  }
  function genreSelect(data) {
    let requestconfig;
    async function getProductData() {
      if (data == "All")
        requestconfig = {
          url: APP_CONSTANTS.BASE_URL + "?searchBy=genres",
        };
      else
        requestconfig = {
          url: APP_CONSTANTS.BASE_URL + "?search=" + data + "&searchBy=genres",
        };

      await sendRequest(requestconfig, getProductResponse);
    }
    getProductData();
  }

  useEffect(() => {
    let requestconfig;
    async function getProductData() {
      props.searchText
        ? (requestconfig = {
            url:
              APP_CONSTANTS.BASE_URL +
              "?search=" +
              props.searchText +
              "&searchBy=title",
          })
        : (requestconfig = {
            url: APP_CONSTANTS.BASE_URL,
          });

      await sendRequest(requestconfig, getProductResponse);
    }
    getProductData();
  }, [props.searchText]);
  return (
    <Movies
      moviesData={movies}
      error={error}
      onSelect={genreSelect}
      loading={isLoading}
    ></Movies>
  );
}

export default MoviesPage;
