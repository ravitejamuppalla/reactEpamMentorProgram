import React, { useState, createElement, Component } from "react";
import classes from "./Counter.module.css";

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.onIncrementHandler = this.onIncrementHandler.bind(this);
    this.onDecrementHandler = this.onDecrementHandler.bind(this);
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
      createElement("div", { className: classes.value }, this.state.count),

      createElement(
        "button",
        {
          className: classes.buttonCounter,
          onClick: this.onIncrementHandler,
        },
        "Increment"
      ),
      createElement(
        "button",
        {
          className: classes.buttonCounter,
          onClick: this.onDecrementHandler,
        },
        "Decrement"
      )
    );
  }
}

export default CounterSection;
