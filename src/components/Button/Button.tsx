import React from "react";
import { ButtonProps } from "./Button.types";

import "./Button.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Button = ({ onClick, label, dark = false }: ButtonProps) => {
  return (
    <button onClick={onClick} className="button">
      <span className={`button__wrapper ${dark && "button__wrapper--dark"}`}>
        <span className={`button__label ${dark && "button__label--dark"}`}>
          {label}
        </span>
        <span className="button__icon">
          <FontAwesomeIcon
            icon={faArrowRight}
            size="lg"
            color={dark ? "white" : "black"}
          />
        </span>
      </span>
    </button>
  );
};
