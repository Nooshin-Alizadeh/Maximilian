import React, { useState } from "react";

import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "pink")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid
      ${(props) => {
        return props.invalid ? "red" : "#ccc";
      }};
    backgrounf: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
/**&.invalid input {
  border-color: red;
  background: #ffd7d7;
}
&.invalid label {
  color: red;
  text-shadow: #ffd7d7;
} */
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (isValid == false && event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invalid' }> */}
      <FormControl invalid={!isValid}>
        <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            borderColor: isValid ? "#ccc" : "red",
            background: isValid ? "transparent" : "salmon",
          }}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
