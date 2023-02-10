import React, { useState } from "react";

import styled from "styled-components";
// import Button from "../../UI/Button/Button";
import Button from "../../UI/ButtonCssComponent/Button";
import styles from "./CourseInput.module.css";

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
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            borderColor: isValid ? "#ccc" : "red",
            background: isValid ? "transparent" : "salmon",
          }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
