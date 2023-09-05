import "./App.css";
import { Fragment } from "react";
import Counter from "./components/CounterSection";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Movies from "./components/home/Movies";

function App() {
  return (
    <Fragment>
      <Counter></Counter>
      <Home></Home>
    </Fragment>
  );
}

export default App;
