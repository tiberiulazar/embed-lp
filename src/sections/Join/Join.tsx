import React from "react";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { SubTitle } from "../../components/SubTitle";

import "./Join.style.scss";

export const Join = () => {
  return (
    <Section sectionClass="join">
      <div>
        <SubTitle subtitleClass="join__subtitle" text="Join the waitlist" />
        <Button
          onClick={() => console.log("clicked")}
          label="Join waitlist"
          dark
        />
      </div>
    </Section>
  );
};
