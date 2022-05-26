import React from "react";
import { QuestionCard } from "../../components/QuestionCard";
import { Section } from "../../components/Section";
import { SubTitle } from "../../components/SubTitle";
import { QUESTIONS } from "./Questions.constant";

import "./Questions.style.scss";

export const Questions = () => {
  return (
    <Section sectionClass="questions">
      <div>
        <SubTitle
          subtitleClass="questions__subtitle"
          text="Your questions answered"
        />
        <div className="questions__list">
          {QUESTIONS.map((question) => (
            <QuestionCard title={question.title} answer={question.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
};
