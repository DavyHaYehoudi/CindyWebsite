import React from "react";
import instagram512 from "../medias/icons/instagram256.png";
import { Link } from "react-router-dom";

const FollowMe = () => {
  return (
    <div className="followMe">
      <p>
        <i>Le naturopathe ne pose aucun diagnostic médical et ne délivre aucune
        ordonnance.
        <br />
        Les conseils ne se substituent pas à un traitement médical.</i>
      </p>
      <p className="followMeText">SUIVEZ-MOI SUR INSTAGRAM</p>
      <Link
        to="https://www.instagram.com/cindy_naturo/?hl=fr"
        rel="noopener noreferrer"
        target="_blanck"
      >
        <img src={instagram512} alt="icône instagram" />
      </Link>
      <p>
        @cindy_naturo
        <br />
        Retrouvez mes astuces santé et des recettes saines et gourmandes !
      </p>
    </div>
  );
};

export default FollowMe;
