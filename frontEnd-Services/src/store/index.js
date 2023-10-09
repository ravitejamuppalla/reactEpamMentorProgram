import { configureStore } from "@reduxjs/toolkit";
import movieStore from "./MovieStore";

const store = configureStore({
  reducer: {
    MovieStore: movieStore,
  },
});

export default store;
