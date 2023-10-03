import React, { Fragment } from "react";
import {
  Route,
  Routes,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/MovieStore";
import MovieAddEdit from "../components/movies/MovieAddEdit";
import RootLayout from "./RootLayout";
import { useNavigate } from "react-router-dom";
import AddMoviePage from "../pages/AddMoviePage";
import EditMoviePage from "../pages/EditMoviePage";
import DeleteMoviePage from "../pages/DeleteMoviePage";

function RouterPath() {
  // let routerData = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout></RootLayout>,
  //     children: [
  //       { path: "/", element: <HomePage></HomePage> },
  //       {
  //         path: "/MovieDetails/:MovieID",
  //         element: <MovieDetailsPage></MovieDetailsPage>,
  //       },
  //       {
  //         path: "/AddMovie",
  //         element: <AddMoviePage></AddMoviePage>,
  //       },
  //       {
  //         path: "/MovieDetails/:MovieID/EditMovie",
  //         element: <EditMoviePage></EditMoviePage>,
  //       },
  //       {
  //         path: "/MovieDetails/:MovieID/DeleteMovie",
  //         element: <DeleteMoviePage></DeleteMoviePage>,
  //       },
  //     ],
  //   },
  // ]);
  // return <RouterProvider router={routerData}></RouterProvider>;
}

export default RouterPath;

export let defaultRouterData = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      {
        path: "/MovieDetails/:MovieID",
        element: <MovieDetailsPage></MovieDetailsPage>,
      },
      {
        path: "/AddMovie",
        element: <AddMoviePage></AddMoviePage>,
      },
      {
        path: "/MovieDetails/:MovieID/EditMovie",
        element: <EditMoviePage></EditMoviePage>,
      },
      {
        path: "/MovieDetails/:MovieID/DeleteMovie",
        element: <DeleteMoviePage></DeleteMoviePage>,
      },
    ],
  },
]);
