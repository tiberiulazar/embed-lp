import React from "react";
import { SectionProps } from "./Section.types";

import "./Section.style.scss";

export const Section = ({ sectionClass, children }: SectionProps) => {
  return <div className={`section ${sectionClass}`}>{children}</div>;
};
