import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "../../assets/Logo_wide.png";
import { MenuLink } from "../MenuLink";
import { MENU_ITEMS } from "./Menu.constants";
import "./Menu.style.scss";

export const Menu = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt={"Embed logo"} className="navbar__logo" />
      <ul className="navbar__list">
        {MENU_ITEMS.map(({ label, section }, index) => (
          <MenuLink
            key={index.toString()}
            active={index === 1}
            label={label}
            section={section}
          />
        ))}
      </ul>
      <a href="#" className="navbar__mobile-toggle">
        <FontAwesomeIcon icon={faBarsStaggered} size="2x" />
      </a>
    </nav>
  );
};
