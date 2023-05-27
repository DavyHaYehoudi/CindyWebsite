import Headband from "../components/Headband";
import ImageParagraph from "../components/ImageParagraph";
import Tabbs from "../components/Tabbs";
import MassageSlider from "../components/MassageSlider";
import { dataMassage } from "../textes/massages/dataMassage";
import { useContext } from "react";
import logo from "../medias/icons/logo.png";
import { MassageSelectContext } from "../context/MassageSelectProvider";

const Massages = () => {
  const { massageId } = useContext(MassageSelectContext);

  return (
    <>
      <div>
        <Headband
          title="LES MASSAGES"
          accroche="Apaisez les tensions pour libérer votre esprit"
          id="massages"
        />
        <div className="massage_img_Bg bg-img"></div>
        <h2 className={"titleMassageSelected"}>
          {dataMassage[massageId].title}{" "}
        </h2>
        <MassageSlider massageId={massageId} />
      </div>
      <Tabbs
        file="massages"
        title={dataMassage[massageId].title}
        tarifs={dataMassage[massageId].tarif}
        id={dataMassage[massageId].id}
        illustrations={dataMassage[massageId].img_illustration}
        composant={
          <ImageParagraph
            file="massages"
            imageSrc={dataMassage[massageId].img_main}
            imageAlt={dataMassage[massageId].title}
            imagePosition="right"
            paragraphText={dataMassage[massageId].large_description}
          />
        }
      />
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
    </>
  );
};

export default Massages;
