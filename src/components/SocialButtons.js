import React from "react";
import { Button } from "react-bootstrap";
import facebook from "../medias/facebook48.png";
import instagram from "../medias/instagram48.png";

const SocialButtons = () => {
  return (
    <div className="socialZone">
      <Button
        className="socialButtons"
        variant="link"
        href="https://www.instagram.com/cindy_naturo/?hl=fr"
      >
        <img src={instagram} />
      </Button>
      <Button
        className="socialButtons"
        variant="link"
        href="https://www.facebook.com/people/Cindy-Pantoustier-Naturopathe/100085082745386/?ref=pages_you_manage"
      >
        <img src={facebook} />
      </Button>
    </div>
  );
};

export default SocialButtons;
