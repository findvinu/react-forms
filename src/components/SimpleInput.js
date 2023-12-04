import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enterdNameTouched, setEnterdNameTouched] = useState(false);
  // const nameRef = useRef();

  const enterdNameIsValid = enterName.trim() !== "";
  const nameInputIsValid = !enterdNameIsValid && enterdNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnterdNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnterdNameTouched(true);
    //  const enteredValue = nameRef.current.value;
    //  console.log("nameRef", enteredValue);
    if (!enterdNameIsValid) {
      return;
    }

    setEnterName("");
    setEnterdNameTouched(false);
  };

  const inputClasses = nameInputIsValid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsValid && <p className="error-text">Please enter name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
