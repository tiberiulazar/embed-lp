import React from "react";
import { StepCardProps } from "./StepCard.types";

import "./StepCard.style.scss";

export const StepCard = ({ icon, stepTitle, listElements }: StepCardProps) => {
  return (
    <div className="step-card">
      <div className="step-card__header">
        <img src={icon} alt={stepTitle} className="step-card__img" />
        <h3 className="step-card__title">{stepTitle}</h3>
      </div>

      <ol className="step-card__list">
        {listElements?.map((li) => (
          <li className="step-card__item">{li}</li>
        ))}
      </ol>
    </div>
  );
};
