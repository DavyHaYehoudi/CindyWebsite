import React from "react";
import logo from "../medias/icons/logo.png";
import ContactButton from "../components/ContactButton";
import { Link, useLocation } from "react-router-dom";
import SocialButtons from "../components/SocialButtons";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="sub-footer1">
        <div className="footer_block1">
          <Link to='/#homePage'className="footer_logo" >
            <img src={logo} alt="logo" className="mx-2" width="40" height="40" />
            <span>2023 Cindy Pantoustier - Naturopathe</span> 
          </Link>
        </div>
        <SocialButtons />
        {location.pathname !== "/contact" && (
          <div className="footer_block2">
            <ContactButton />{" "}
          </div>
        )}
        <div className="footer_block3">
          <p>Adresse du cabinet :</p>
          <p>
            555, avenue de la république
            <br />
            83 560 Vinon-sur-Verdon
            <br />
            <span className="footer_adr_precision">
              Dans le centre de kinésithérapie,
              <br /> face à la pharmacie
            </span>{" "}
          </p>
          <p className="footer_tel">06 18 01 05 04</p>
        </div>
      </div>
      <div className="sub-footer2">
        <p>
          {" "}
          <Link to="/mentions_legales">Mentions légales</Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
