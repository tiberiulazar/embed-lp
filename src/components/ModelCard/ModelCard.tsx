import React from "react";
import { ModelCardProps } from "./ModelCard.types";

import "./ModelCard.style.scss";

export const ModelCard = ({
  title,
  description,
  className = "",
}: ModelCardProps) => {
  return (
    <div className={`model-card ${className}`}>
      <h3 className="model-card__title">{title}</h3>
      <p className="model-card__description">{description}</p>
    </div>
  );
};
