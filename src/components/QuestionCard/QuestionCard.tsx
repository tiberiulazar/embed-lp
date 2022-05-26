import React from "react";

import "./QuestionCard.style.scss";

export const QuestionCard = ({
  title,
  answer,
}: {
  title: string;
  answer: string;
}) => {
  return (
    <div className="question">
      <h3 className="question__title">{title}</h3>
      <p className="question__answer">{answer}</p>
    </div>
  );
};
