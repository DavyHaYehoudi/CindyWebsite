import React from "react";
import Bandeau from "../components/Bandeau";
import {
  massage1,
  massage2,
  massage3,
  massage4,
  massage5,
  tarifs1,
  tarifs2,
  tarifs3,
  tarifs4,
  tarifs5,
} from "../textes/massages/paragraph";
import ImageParagraph from "../components/ImageParagraph";
import Table from "../components/Table";
import massage from "../medias/massages/m5c-main.jpg";
import massageill1 from "../medias/massages/m5c-ill1.jpg";
import massageill2 from "../medias/massages/m5c-ill2.jpg";
import massageill3 from "../medias/massages/m5c-ill3.jpg";
import kobido from "../medias/massages/kobido-main.jpg";
import kobidoill1 from "../medias/massages/kobido-ill1.jpg";
import kobidoill2 from "../medias/massages/kobido-ill2.jpg";
import kobidoill3 from "../medias/massages/kobido-ill3.jpg";
import belly from "../medias/massages/Belly-main.png";
import bellyill1 from "../medias/massages/belly-ill1.jpg"
import bellyill2 from "../medias/massages/belly-ill2.jpg"
import bellyill3 from "../medias/massages/belly-ill3.jpg"
import vodder from "../medias/massages/vodder-main.jpg";
import vodderill1 from "../medias/massages/vodder-ill1.jpg"
import vodderill2 from "../medias/massages/vodder-ill2.jpg"
import vodderill3 from "../medias/massages/vodder-ill3.jpg"
import pochon from "../medias/massages/pochons-main.jpg";
import pochonill1 from "../medias/massages/pochons-ill1.jpg";
import pochonill2 from "../medias/massages/pochons-ill2.jpg";
import pochonill3 from "../medias/massages/pochons-ill3.jpg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Massages = () => {
  return (
    <>
      <div class="box-nav-massages">
        <div class="scroll-box">
          <ul>
            <li>
            <HashLink to="#5continents-tab-description">Section 1</HashLink>
            </li>
            <li>
            <HashLink to="#visageJaponais-tab-description">Section 2</HashLink>
            </li>
            <li>
              <HashLink to="#belly-tab-description">Section 3</HashLink>
            </li>
            <li>
            <HashLink to="#vodder-tab-description">Section 4</HashLink>
            </li>
            <li>
            <HashLink to="#pochons-tab-description">Section 5</HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Bandeau
          title="LES MASSAGES"
          accroche="Apaisez les tensions pour libérer votre esprit"
        />
        <div className="massage_img_Bg"></div>
        <div className="remarques">
          Les séances de massages commencent toutes par un échange de quelques
          minutes sur vos attentes ainsi que vos éventuelles sensibilités (ex:
          cervicales sensibles, peau réactive, etc). Je vous conseille de
          prévoir 15 minutes supplémentaires pour revenir en douceur de cet
          instant bien-être. Une infusion vous est proposée à la fin de la
          séance et si vous le souhaitez, quelques conseils naturo personnalisés
          peuvent vous être suggérés.
        </div>
      </div>
      <Table
        title="MASSAGE DES 5 CONTINENTS®"
        tarifs={tarifs1}
        id="5continents"
        illustrations={[massageill1, massageill2, massageill3]}
        composant={
          <ImageParagraph
            imageSrc={massage}
            imageAlt="image du massage des 5 continents"
            imagePosition="right"
            paragraphText={massage1}
          />
        }
      />
      <Table
        title="MASSAGE DU VISAGE JAPONAIS"
        tarifs={tarifs2}
        id="visageJaponais"
        illustrations={[kobidoill1, kobidoill2, kobidoill3]}
        composant={
          <ImageParagraph
            imageSrc={kobido}
            imageAlt="image du massage du visage japonais dit Kobido"
            imagePosition="right"
            paragraphText={massage2}
          />
        }
      />
      <Table
        title="BELLY REVOLUTION ®"
        tarifs={tarifs3}
        id="belly"
        illustrations={[bellyill1, bellyill2, bellyill3]}
        composant={
          <ImageParagraph
            imageSrc={belly}
            imageAlt="image du massage Belly Révolution"
            imagePosition="right"
            paragraphText={massage3}
          />
        }
      />
      <Table
        title="MASSAGE DRAINANT METHODE VODDER"
        tarifs={tarifs4}
        id="vodder"
        illustrations={[vodderill1, vodderill2, vodderill3]}
        composant={
          <ImageParagraph
            imageSrc={vodder}
            imageAlt="image du massage drainant méthode Vodder"
            imagePosition="right"
            paragraphText={massage4}
          />
        }
      />
      <Table
        title="MASSAGE AUX POCHONS"
        tarifs={tarifs5}
        id="pochons"
        illustrations={[pochonill1, pochonill2, pochonill3]}
        composant={
          <ImageParagraph
            imageSrc={pochon}
            imageAlt="image du massage aux pochons"
            imagePosition="right"
            paragraphText={massage5}
          />
        }
      />
    </>
  );
};

export default Massages;
