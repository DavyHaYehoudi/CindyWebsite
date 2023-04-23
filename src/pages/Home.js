import React from "react";
import ImageParagraph from "../components/ImageParagraph";
import homenaturo from "../medias/home/home-naturo.jpg"
import profilhome from "../medias/home/profil-home.jpg"
import { paragraph1, paragraph2 } from "../textes/home/paragraph";
import FollowMe from "../components/FollowMe";
import Adage from "../components/Adage";

const Home = () => {
  return (
    <div className="homePage" id="homePage">
      <div className="hero">
        <h1>
          <i>Cindy PANTOUSTIER</i>
          <br />
          <span className="subtitle_homePage">
            NATUROPATHE | MASSAGES
            <br />
            BIEN-ETRE
          </span>
        </h1>
      </div>
      <ImageParagraph
        imageSrc={homenaturo}
        imageAlt="tablée de plusieurs bols d'ingrédients naturels"
        imagePosition="left"
        paragraphText={paragraph1}
      />
      <ImageParagraph
        imageSrc={profilhome}
        imageAlt="portrait de Cindy et de ses deux enfants"
        imagePosition="right"
        paragraphText={paragraph2}
      />
      <FollowMe />
      <Adage />
    </div>
  );
};

export default Home;
