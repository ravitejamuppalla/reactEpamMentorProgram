import { fireEvent, render, screen } from "@testing-library/react";
import CounterSection from "../components/CounterSection";
import APP_CONSTANTS from "../AppConstants";

describe("Counter Test Validation", () => {
  it("Test that component renders initial value provided in props", () => {
    render(<CounterSection></CounterSection>);
  });
  it("Test that a click event on decrement button decrements the displayed value", () => {
    render(<CounterSection></CounterSection>);
    let decrement = screen.getAllByText(APP_CONSTANTS.DECREMENT);
    expect(decrement).toBeTruthy();
  });
  it("Test that a click event on Incremant button Incerments the displayed value", () => {
    render(<CounterSection></CounterSection>);
    let increment = screen.getAllByText(APP_CONSTANTS.INCREAMNET);
    expect(increment).toBeTruthy();
  });
  it("Test that a click event on counter the displayed value", () => {
    render(<CounterSection></CounterSection>);
    let someElement = screen.getByText("0");
    expect(someElement).toBeInTheDocument();
  });
  it("Test that a click event on Incremant button Incerments the displayed value", () => {
    let result = render(<CounterSection></CounterSection>);
    let increment = screen.getByText(APP_CONSTANTS.INCREAMNET);
    expect(increment).toBeTruthy();
    const counterCount = result.container.querySelector("#counterCount");
    fireEvent.click(increment);
    expect(counterCount).toBeTruthy();
    expect(counterCount).toHaveTextContent(1);
  });
  it("Test that a click event on decrement button decrements the displayed value", () => {
    let result = render(<CounterSection></CounterSection>);
    let decrement = screen.getByText(APP_CONSTANTS.DECREMENT);
    expect(decrement).toBeTruthy();
    const counterCount = result.container.querySelector("#counterCount");
    fireEvent.click(decrement);
    expect(counterCount).toBeTruthy();
    expect(counterCount).toHaveTextContent(-1);
  });
});
