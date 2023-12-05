import { useRef, useState, useEffect } from "react";
import UseInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: enterName,
    isValid: enterdNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = UseInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enterdNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enterdNameIsValid) {
      return;
    }

    resetNameInput();
  };

  const inputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enterName}
          //  ref={nameRef}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Please enter name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
