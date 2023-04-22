import React, { useEffect, useRef, useState } from "react";
import Table from "../components/Table";
import ImageParagraph from "../components/ImageParagraph";
import bureau from "../medias/bureau.jpg";
import fdb from "../medias/fdb.jpg";
import {
  paragraph1,
  paragraph2,
  tarifs2,
} from "../textes/consultations/paragraph";
import { tarifs1 } from "../textes/consultations/paragraph";
import Bandeau from "../components/Bandeau";

const Consultations = () => {

  return (
    <div>
      <Bandeau title="LES CONSULTATIONS" accroche="Retrouvez et préservez votre santé" />
      <div>
        <Table
          title="Consultation de naturopathie"
          id="naturopathie"
          composant={
            <ImageParagraph
              imageSrc={bureau}
              imageAlt="bureau des consultations"
              imagePosition="right"
              paragraphText={paragraph1}
            />
          }
          illustrations={null}
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
      <Table
        title="Consultation de fleurs de Bach"
        id="fleursdebach"
        composant={
          <ImageParagraph
            imageSrc={fdb}
            imageAlt="fleurs de Bach"
            imagePosition="left"
            paragraphText={paragraph2}
          />
        }
        illustrations={null}
        tarifs={tarifs2}
      />
    </div>
  );
};

export default Consultations;
