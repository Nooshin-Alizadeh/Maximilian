import React from "react";
import styled from "styled-components";
import "./Button.module.css";
import style from "./Button.module.css";

const Button = (props) => {
  // debugger;
  return (
    <button type={props.type} className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
