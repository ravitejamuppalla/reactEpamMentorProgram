import React, { useState, createElement, Component } from "react";
import classes from "./Counter.module.css";
import AppConstants from "../AppConstants";

class CounterSection extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  onIncrementHandler() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  onDecrementHandler() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  render() {
    return createElement(
      "main",
      { className: classes.counter },
      createElement("h1", null, "Counter"),
      createElement(
        "div",
        { className: classes.value, id: "counterCount" },
        this.state.count
      ),

      createElement(
        "button",
        {
          className: classes.buttonCounter,
          onClick: this.onIncrementHandler.bind(this),
        },
        AppConstants.INCREAMNET
      ),
      createElement(
        "button",
        {
          className: classes.buttonCounter,
          onClick: this.onDecrementHandler.bind(this),
        },
        AppConstants.DECREMENT
      )
    );
  }
}

export default CounterSection;
