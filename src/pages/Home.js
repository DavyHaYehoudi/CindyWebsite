import React from "react";
import ImageParagraph from "../components/ImageParagraph";
import FollowMe from "../components/FollowMe";
import Adage from "../components/Adage";
import Testimonies from "../components/Testimonies";
import { all_testimonies } from "../textes/temoignages/temoignages";
import logo from "../medias/icons/logo.png";
import { dataHome } from "../textes/home/dataHome";

const Home = () => {
  return (
    <div className="homePage">
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
      <div className="m-5 text-center">
        <img src={logo} alt="lotus du logo" />{" "}
      </div>
      <ImageParagraph
        file="home"
        imageSrc={dataHome[0].img_main}
        imageAlt={dataHome[0].title}
        imagePosition="left"
        paragraphText={dataHome[0].large_description}
      />
      <ImageParagraph
        file="home"
        imageSrc={dataHome[1].img_main}
        imageAlt={dataHome[1].title}
        imagePosition="right"
        paragraphText={dataHome[1].large_description}
      />
      <FollowMe />
      <Adage />
      <Testimonies name="Témoignages" testimonies={all_testimonies} />
    </div>
  );
};

export default Home;
