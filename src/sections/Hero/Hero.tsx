import React from "react";
import { Menu } from "../../components";

import LogoCompact from "../../assets/Logo_compact.png";

import "./Hero.style.scss";
import { Button } from "../../components/Button";

export const Hero = () => {
  return (
    <header className="header">
      <Menu />
      <div className="hero">
        <img src={LogoCompact} alt="Embed logo" className="hero__logo" />
        <h1 className="title hero__title">
          Embed empowers you to <br />
          <span className="hero__title--border">monetize your portfolio</span>
        </h1>
        <p className="hero__description">
          We enable NFT holders to become influencers, build their audience
          through a turn-key solution developed to monetize and transform their
          portfolio into a yielding asset. We create passion-based communities.
        </p>
        <Button
          onClick={() => console.log("clicked")}
          label={"Join waitlist"}
        />
      </div>
    </header>
  );
};
