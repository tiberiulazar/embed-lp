import React from "react";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { StepCard } from "../../components/StepCard";
import { SubTitle } from "../../components/SubTitle";
import { STEPS_DATA } from "./Steps.constants";

import "./Steps.style.scss";

export const Steps = () => {
  return (
    <Section sectionClass="steps">
      <div>
        <SubTitle
          text="How to earn with Embed"
          subtitleClass="steps__subtitle"
        />
        <p className="steps__description">
          Three simple steps to get you started.
        </p>
        <div className="flex steps__list">
          {STEPS_DATA.map((step, index) => (
            <StepCard
              key={index.toString()}
              icon={step.icon}
              stepTitle={step.title}
              listElements={step.steps}
            />
          ))}
        </div>
        <h3 className="steps__cta-text">Be part of the alpha launch</h3>
        <Button
          onClick={() => console.log("clicked")}
          label={"Join waitlist"}
        />
      </div>
    </Section>
  );
};
