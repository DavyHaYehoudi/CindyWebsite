import React from "react";
import ImageParagraph from "../components/ImageParagraph";
import naturo from "../medias/consultations/naturo-main.jpg"
import naturoill1 from "../medias/consultations/naturo-ill1.jpg"
import naturoill2 from "../medias/consultations/naturo-ill2.jpg"
import naturoill3 from "../medias/consultations/naturo-ill3.jpg"
import fdb from "../medias/consultations/fdb-main.jpg";
import fdbill1 from "../medias/consultations/fdb-ill1.jpg"
import fdbill2 from "../medias/consultations/fdb-ill2.jpg"
import fdbill3 from "../medias/consultations/fdb-ill3.jpg"
import {
  paragraph1,
  paragraph2,
  tarifs2,
} from "../textes/consultations/paragraph";
import { tarifs1 } from "../textes/consultations/paragraph";
import Headband from "../components/Headband";
import Tabbs from "../components/Tabbs";

const Consultations = () => {

  return (
    <div>
      <Headband title="LES CONSULTATIONS" accroche="Retrouvez et préservez votre santé" />
      <div>
        <Tabbs
          title="Consultation de naturopathie"
          id="naturopathie"
          composant={
            <ImageParagraph
              imageSrc={naturo}
              imageAlt="confection des ingrédients naturels"
              imagePosition="right"
              paragraphText={paragraph1}
            />
          }
          illustrations={[naturoill1,naturoill2,naturoill3]}
          tarifs={tarifs1}
        />
        <p
          style={{
            backgroundColor: "var(--main-color)",
            textAlign: "center",
            color: "var(--five-color)",
            padding: "3rem",
          }}
        >
          <b>
            Votre programme d'hygiène vitale reprenant les conseils évoqués
            ensemble, vous sera envoyé par mail ou sera disponible au cabinet
            sous 48h. <br />
            <br />
            <i>
              Si vous le souhaitez, une facture vous sera délivrée afin de
              bénéficier d'un éventuel remboursement auprès de votre mutuelle
              santé
            </i>
          </b>
        </p>
      </div>
      <Tabbs
        title="Consultation de fleurs de Bach"
        id="fleursdebach"
        composant={
          <ImageParagraph
            imageSrc={fdb}
            imageAlt="fleurs de Bach dans une fiole"
            imagePosition="left"
            paragraphText={paragraph2}
          />
        }
        illustrations={[fdbill1,fdbill2,fdbill3]}
        tarifs={tarifs2}
      />
    </div>
  );
};

export default Consultations;
