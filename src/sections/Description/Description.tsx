import React from "react";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { SubTitle } from "../../components/SubTitle";

import "./Description.style.scss";

import NFTs from "../../assets/NFT_illustration.gif";

export const Description = () => {
  return (
    <Section sectionClass="description">
      <div className="flex-column description__container">
        <div className="flex description__content">
          <div className="description__info">
            <SubTitle text="Lead the change" />
            <div className="description__text">
              <p className="text-body description__paragraph">
                In a decentralised world, you{" "}
                <span className="text-bold description__text">
                  power the brand.{" "}
                </span>
                Influence the way brands will look in the metaverse and{" "}
                <span className="text-bold">build a community</span> around
                those you love.
              </p>
              <p className="text-body description__paragraph">
                <span className="text-bold">
                  Be a part of the change and join Embed’s decentralized
                  protocol today
                </span>
              </p>
            </div>
            <Button
              onClick={() => console.log("clicked")}
              label={"Join waitlist"}
            />
          </div>
          <div className="description__illustration">
            <img
              src={NFTs}
              alt="NFTs ILLUSTRATION"
              className="description__img"
            />
          </div>
        </div>
        <p className="info-tip description description__info-tip">
          The trademarks, logos and brand names that appear on this website are
          used for informational or editorial purposes and are the property of
          their respective owners. Use of these trademarks, logos and brand
          names does not imply any affiliation with or endorsement by their
          owners.
        </p>
      </div>
    </Section>
  );
};
