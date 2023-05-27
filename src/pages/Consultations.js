import React, { useContext, useEffect} from "react";
import Headband from "../components/Headband";
import { dataConsultation } from "../textes/consultations/dataConsultation";
import ConsultationSlider from "../components/ConsultationSlider";
import { scrollToAnchor } from "../utils/anchor";
import { ConsultationSelectContext } from "../context/ConsultationSelectProvider";

const Consultations = () => {
  const {consultationId}=useContext(ConsultationSelectContext)
  useEffect(() => {
    scrollToAnchor("consultations");
  }, []);
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
      <ConsultationSlider consultationId={consultationId} />
      <div>
      <div className="consultation-tarif-content" dangerouslySetInnerHTML={{
            __html: dataConsultation[consultationId].tarif,
          }}></div>
        <article
          className="consultation-descript-content"
          dangerouslySetInnerHTML={{
            __html: dataConsultation[consultationId].large_description,
          }}
        ></article>
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
