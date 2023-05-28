import Headband from "../components/Headband";
import MassageSlider from "../components/MassageSlider";
import { dataMassage } from "../textes/massages/dataMassage";
import { useContext, useEffect } from "react";
import { MassageSelectContext } from "../context/MassageSelectProvider";
import { scrollToAnchor } from "../utils/anchor";

const Massages = () => {
  const { massageId } = useContext(MassageSelectContext);
  useEffect(() => {
    scrollToAnchor("massages");
  }, []);
  return (
    <>
      <div>
        <Headband
          title="LES MASSAGES"
          accroche="Apaisez les tensions pour libérer votre esprit"
          id="massages"
        />
        <h2 className={"titleMassageSelected"}>
          {dataMassage[massageId].title}{" "}
        </h2>
        <MassageSlider massageId={massageId} />
        <div
          className="massage-tarif-content"
          dangerouslySetInnerHTML={{
            __html: dataMassage[massageId].tarif,
          }}
        ></div>
        <article className="massage-descript-content">
          <div
            className="massage-descript-body"
            dangerouslySetInnerHTML={{
              __html: dataMassage[massageId].large_description,
            }}
          ></div>{" "}
        </article>
      </div>
      <div className="remarques containerText">
        Les séances de massages commencent toutes par un échange de quelques
        minutes sur vos attentes ainsi que vos éventuelles sensibilités (ex:
        cervicales sensibles, peau réactive, etc). Je vous conseille de prévoir
        15 minutes supplémentaires pour revenir en douceur de cet instant
        bien-être. Une infusion vous est proposée à la fin de la séance et si
        vous le souhaitez, quelques conseils naturo personnalisés peuvent vous
        être suggérés.
      </div>
    </>
  );
};

export default Massages;
