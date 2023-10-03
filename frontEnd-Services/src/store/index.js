import { configureStore } from "@reduxjs/toolkit";
import movieStore from "./MovieStore";
import { enhancer } from "addon-redux";

const store = configureStore(
  {
    reducer: {
      MovieStore: movieStore,
    },
  },
  {},
  enhancer
);

export default store;
