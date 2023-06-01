import React from "react";
import { Button } from "react-bootstrap";
import facebook from "../medias/icons/facebook48.png";
import instagram from "../medias/icons/instagram48.png";

const SocialButtons = () => {
  return (
    <div className="socialZone">
      <Button
        className="socialButtons"
        variant="link"
        href="https://www.instagram.com/cindy_naturo/?hl=fr"
        rel="noopener noreferrer"
        target="_blanck"
      >
        <img src={instagram} alt="instagram" width="48" height="48" />
      </Button>
      <Button
        className="socialButtons"
        variant="link"
        href="https://www.facebook.com/people/Cindy-Pantoustier-Naturopathe/100085082745386/?ref=pages_you_manage"
        rel="noopener noreferrer"
        target="_blanck"
      >
        <img src={facebook} alt="facebook" width="48" height="48" />
      </Button>
    </div>
  );
};

export default SocialButtons;
