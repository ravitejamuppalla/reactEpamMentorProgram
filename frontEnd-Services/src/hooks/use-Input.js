import { useState } from "react";
export default function UseInput(inputValidation) {
  const [enteredInputValue, setEnteredInputValue] = useState("");
  const [onBlurInputValueIsValid, setOnBlurInputValueIsValid] = useState(false);
  let enteredInputValueIsValid = inputValidation(enteredInputValue);
  let isInputHasError = onBlurInputValueIsValid && !enteredInputValue;

  function ValueInputHandlerFunction(event) {
    let eventDetails = event.target ? event.target.value : event;
    setEnteredInputValue(eventDetails);
  }
  function BlurHandlerFunction(event) {
    setOnBlurInputValueIsValid(true);
  }

  function reset() {
    setEnteredInputValue("");
    setOnBlurInputValueIsValid(false);
  }

  return {
    inputValue: enteredInputValue,
    blurIsValid: onBlurInputValueIsValid,
    inputValueIsValid: enteredInputValueIsValid,
    textInputHandler: ValueInputHandlerFunction,
    tochedInputHandler: BlurHandlerFunction,
    isInputHasError: isInputHasError,
    reset: reset,
  };
}
