import React from "react";
import { MenuLinkProps } from "./MenuLink.types";
import "./MenuLink.style.scss";

export const MenuLink = ({ label, section, active = false }: MenuLinkProps) => {
  return (
    <li className="menu-item">
      <a
        href={`#${section}`}
        className={`menu-item__link ${active && "menu-item__link--active"}`}
      >
        {label}
      </a>
    </li>
  );
};
