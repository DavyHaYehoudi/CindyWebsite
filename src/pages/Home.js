import React from "react";
import ImageParagraph from "../components/ImageParagraph";
import homenaturo from "../medias/home/home-naturo.jpg"
import profilhome from "../medias/home/profil-home.jpg"
import { paragraph1, paragraph2 } from "../textes/home/paragraph";
import FollowMe from "../components/FollowMe";
import Adage from "../components/Adage";
import Testimonies from "../components/Testimonies";
import { all_testimonies } from "../textes/temoignages/temoignages";
import logo from "../medias/icons/logo.png"

const Home = () => {
  return (
    <div className="homePage" >
      <div className="hero" id="homePage">
        <h1>
          <i>Cindy PANTOUSTIER</i>
          <br />
          <span className="subtitle_homePage">
            NATUROPATHE <span className="lateralBar">|</span> MASSAGES
            <br />
            bien-être
          </span>
        </h1>
      </div>
      <div className="m-5 text-center" ><img src={logo} alt="lotus du logo"  /> </div>
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
      <Testimonies name="Témoignages" testimonies={all_testimonies} />
    </div>
  );
};

export default Home;
