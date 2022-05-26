import React from "react";
import { subTitleProps } from "./SubTitle.types";

export const SubTitle = ({ text, subtitleClass = "" }: subTitleProps) => {
  return <h2 className={`subtitle ${subtitleClass}`}>{text}</h2>;
};
