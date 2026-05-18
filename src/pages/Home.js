import React from "react";
import ImageParagraph from "../components/ImageParagraph";
import FollowMe from "../components/FollowMe";
import Adage from "../components/Adage";
import Testimonies from "../components/Testimonies";
import { all_testimonies } from "../textes/temoignages/temoignages";
import logo from "../medias/icons/logo.png";
import { dataHome } from "../textes/home/dataHome";

const ANNONCE_DATE_FIN = new Date("2026-09-15T00:00:00");
const DATE_REPRISE_CONSULTATIONS = new Date("2026-07-03T00:00:00");

const Home = () => {
  const now = new Date();
  const afficherAnnonce = now < ANNONCE_DATE_FIN;
  const avantConge = now < DATE_REPRISE_CONSULTATIONS;

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
      {afficherAnnonce && (
        <div className="annonceMaternite" role="status" aria-live="polite">
          <h2 className="annonceTitle">✨ Petite mise à jour ✨</h2>
          {avantConge ? (
            <>
              <p>
                Jusqu'au <strong>3 juillet</strong>, je continue de vous
                accompagner uniquement en consultation 🤍
              </p>
              <p>
                À partir du <strong>3 juillet</strong>, je serai en congé
                maternité et les rendez-vous seront suspendus.
              </p>
            </>
          ) : (
            <p>
              Je suis actuellement en congé maternité, les rendez-vous sont
              suspendus 🤍
            </p>
          )}
          <p>Tout reprendra à l'automne ✨</p>
          <p className="annonceContact">
            Pour toute réservation ou question, vous pouvez me contacter au{" "}
            <a href="tel:+33618010504">06 18 01 05 04</a>.
          </p>
        </div>
      )}
      <div className="m-5 text-center">
        <img src={logo} alt="lotus du logo" width="40" height="40" />{" "}
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
      <Testimonies name="Temoignages" testimonies={all_testimonies} />
    </div>
  );
};

export default Home;
