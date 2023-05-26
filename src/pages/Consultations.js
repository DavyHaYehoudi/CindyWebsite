import React, { useState } from "react";
import ImageParagraph from "../components/ImageParagraph";
import Headband from "../components/Headband";
import Tabbs from "../components/Tabbs";
import { dataConsultation } from "../textes/consultations/dataConsultation";
import ConsultationSlider from "../components/ConsultationSlider";

const Consultations = () => {
  const [consultationId, setConsultationId] = useState("0");
  const handleConsultationSelected = (id) => {
    setConsultationId(id);
  };
  return (
    <div>
      <Headband
        title="LES CONSULTATIONS"
        accroche="Retrouvez et préservez votre santé"
        id="consultations"
        classTitle="fs-2"
      />
      <div className="consultation_img_Bg bg-img"></div>
      <h2 className={"titleMassageSelected"}>
          {dataConsultation[consultationId].title}{" "}
        </h2>
      <ConsultationSlider
        handleConsultationSelected={handleConsultationSelected}
      />
      <div>
        <Tabbs
          file="consultations"
          title={dataConsultation[consultationId].title}
          id={dataConsultation[consultationId].id}
          composant={
            <ImageParagraph
              file="consultations"
              imageSrc={dataConsultation[consultationId].img_main}
              imageAlt={dataConsultation[consultationId].title}
              imagePosition="right"
              paragraphText={dataConsultation[consultationId].large_description}
            />
          }
          illustrations={dataConsultation[consultationId].img_illustration}
          tarifs={dataConsultation[consultationId].tarif}
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
    </div>
  );
};

export default Consultations;
