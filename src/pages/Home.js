import React from "react";
import CarouselHome from "../components/CarouselHome";
import cheminForet from "../medias/cheminForet.jpg";
import ImageParagraph from "../components/ImageParagraph";
import cindyPortrait from "../medias/cindyPortrait.jpeg";
import { paragraph1, paragraph2 } from "../textes/home/paragraph";
import FollowMe from "../components/FollowMe";
import Adage from "../components/Adage";

const Home = () => {
  return (
    <div className="homePage">
      <h1>
        <i>Cindy PANTOUSTIER</i>
        <br />
        <span className="subtitle_homePage">
          NATUROPATHE | MASSAGES
          <br />
          BIEN-ETRE
        </span>
      </h1>
      <CarouselHome />
      <ImageParagraph
        imageSrc={cheminForet}
        imageAlt="chemin de foret"
        imagePosition="left"
        paragraphText={paragraph1}
      />
      <ImageParagraph
        imageSrc={cindyPortrait}
        imageAlt="portrait de Cindy"
        imagePosition="right"
        paragraphText={paragraph2}
      />
      <FollowMe />
      <Adage />
    </div>
  );
};

export default Home;
