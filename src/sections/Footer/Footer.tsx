import React from "react";

import "./Footer.style.scss";

import LogoWhite from "../../assets/Logo_white.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex footer__container">
        <div className="footer__credits">
          <img src={LogoWhite} alt="Embed logo" className="footer__logo" />
          <p className="footer__credentials">© Embed 2022</p>
        </div>
        <div className="footer__info">
          <p className="footer__description">
            Embed protocol is a marketing community engine solution for brands
            and NFT holders that discovers, tokenizes, and activates communities
            in the metaverse and web3
          </p>
          <ul className="footer__socials">
            <li className="footer__social-media">
              <a
                href="https://www.facebook.com"
                className="footer__social-link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="white"
                  size="2x"
                />
              </a>
            </li>
            <li className="footer__social-media">
              <a
                href="https://www.telegram.com"
                className="footer__social-link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTelegram} color="white" size="2x" />
              </a>
            </li>
            <li className="footer__social-media">
              <a
                href="https://www.twitter.com"
                className="footer__social-link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />
              </a>
            </li>
          </ul>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">
                Legal
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">
                Privacy
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">
                Careers
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__credentials footer__credentials--mobile">
          © Embed 2022
        </p>
      </div>
    </footer>
  );
};
