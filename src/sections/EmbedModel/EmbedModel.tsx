import React from "react";
import { ModelCard } from "../../components/ModelCard/ModelCard";
import { Section } from "../../components/Section";
import { SubTitle } from "../../components/SubTitle";
import { useSelector } from "react-redux";

import "./EmbedModel.style.scss";
import { getDataFromStore } from "../../redux/selectors";

export const EmbedModel = () => {
  const data = useSelector(getDataFromStore);

  return (
    <Section sectionClass="embed-model">
      <div>
        <SubTitle
          text="The Embed-to-Earn Model"
          subtitleClass="embed-model__title"
        />
        <div className="embed-model__list">
          {data.map((el: any) => (
            <ModelCard key={el.id} title={el.title} description={el.body} />
          ))}
        </div>
      </div>
    </Section>
  );
};
