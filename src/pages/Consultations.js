import React, { useContext } from "react";
import ImageParagraph from "../components/ImageParagraph";
import Headband from "../components/Headband";
import Tabbs from "../components/Tabbs";
import { dataConsultation } from "../textes/consultations/dataConsultation";
import { ConsultationSelectContext } from "../context/ConsultationSelectProvider";

const Consultations = () => {
  const {consultationId}=useContext(ConsultationSelectContext)
  return (
    <div>
      <Headband
        title="LES CONSULTATIONS"
        accroche="Retrouvez et préservez votre santé"
        id="consultations"
        classTitle="fs-2"
      />
      <div className="consultation_img_Bg bg-img"></div>

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
        {/* <Tabbs
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
          illustrations={[naturoill1, naturoill2, naturoill3]}
          tarifs={tarifs1}
        /> */}
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
      {/* <Tabbs
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
        illustrations={[fdbill1, fdbill2, fdbill3]}
        tarifs={tarifs2}
      /> */}
    </div>
  );
};

export default Consultations;
