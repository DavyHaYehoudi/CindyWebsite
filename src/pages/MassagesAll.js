import React from "react";
import Headband from "../components/Headband";
import TableComp from "../components/TableComp";
import logo from "../medias/icons/logo.png";

const MassagesAll = () => {
  return (
    <div>
      <Headband
        title="LES MASSAGES"
        accroche="Apaisez les tensions pour libérer votre esprit"
        id="massages"
      />
      <div className="massage_img_Bg bg-img"></div>
      <div className="remarques containerText">
        Les séances de massages commencent toutes par un échange de quelques
        minutes sur vos attentes ainsi que vos éventuelles sensibilités (ex:
        cervicales sensibles, peau réactive, etc). Je vous conseille de prévoir
        15 minutes supplémentaires pour revenir en douceur de cet instant
        bien-être. Une infusion vous est proposée à la fin de la séance et si
        vous le souhaitez, quelques conseils naturo personnalisés peuvent vous
        être suggérés.
      </div>
      <div className="m-5 text-center">
        <img src={logo} alt="lotus du logo" />{" "}
      </div>
      <TableComp />
    </div>
  );
};

export default MassagesAll;
