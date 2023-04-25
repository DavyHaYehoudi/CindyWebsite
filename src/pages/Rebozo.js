import React from "react";
import Headband from "../components/Headband";
import rousse from "../medias/rebozo/rousse.jpg";
import tissage from "../medias/rebozo/tissage.jpg";
import tasse from "../medias/rebozo/tasse.jpg";
import bougie from "../medias/rebozo/bougie.jpg";
import tissus from "../medias/rebozo/tissus.jpg";
import bain from "../medias/rebozo/bain.jpg";
import serrage from "../medias/rebozo/serrage.jpg";
import generation from "../medias/rebozo/generation.jpg";
import femmebb from "../medias/rebozo/femmebb.jpg";

const Rebozo = () => {
  return (
    <div>
      <Headband
        title="RITUEL REBOZO"
        accroche="Plus qu'un soin, une expérience sensorielle inoubliable"
      />
      <section className="containerRebozo">
        <div className="section1">
          <p>
            C'est dans une ambiance <b>chaleureuse et relaxante</b> que Julia et
            moi-même vous offrons ce soin.
            <br />
            <b>Bienveillance, Respect et Accompagnement</b> sont les
            maîtres-mots de notre rituel.
          </p>
          <img src={rousse} alt="visage d'une fille rousse" />
          <div className="mentions containerText">
            <blockquote>
              C'est une reconnexion, un temps pour soi afin de célébrer la femme
              forte et merveilleuse qui est en vous.
            </blockquote>
            <cite>Cindy Pantoustier</cite>
            <p className="rebozoTarifs">
              Durée : 3h (compter 4h avec le temps d'installation, d'échanges et
              de désinstallation)
              <br />
              Tarif : <b>290€</b> (espèces, chèques ou Paypal)
            </p>
          </div>
        </div>
        <article className="section2 ">
          <div className="containerText rebozoDef">
            <h2>Qu'est-ce que le Rebozo ?</h2>
            <p>
              Le nom Rebozo signifie «<b>le châle</b> » et est fabriqué à partir
              de tissus mexicains, il est délicatement coloré avec des pigments
              naturels. C'est un <b>accessoire sacré</b> qu'utilisent les femmes
              mexicaines à différentes périodes de leur vie (soulager les
              douleurs lors du cycle menstruel, resserrer le bassin après
              l'accouchement ou écharpe de portage pour accueillir bébé auprès
              de soi).
            </p>
          </div>
          <div className="rebozoApport">
            <h3>Qu'apporte le rituel Rebozo à 4 mains ?</h3>
            <div className="setImages">
              <img src={tissage} alt="illutstration d'un tissage" />
              <img src={tasse} alt="tasse cerisier" />
              <img
                src={bougie}
                alt="bougie dans un pot en verre tenu dans les mains"
              />
            </div>
            <p className="containerText">
              Le rituel Rebozo est un{" "}
              <b>
                soin ancestral qui honore la femme en l'accompagnant vers un
                nouveau chemin de vie.
              </b>
              <br />
              Tel un rite de passage, cette <b>expérience sensorielle</b> se
              pratique généralement après un accouchement mais aussi lorsque
              l'on souhaite refermer un espace pour en ouvrir un nouveau:
              ménopause, premières menstruations, séparation, changement
              important, deuil etc...
            </p>
          </div>
          <div className="rebozoDeroulement">
            <h3>Déroulement du soin</h3>
            <div className="setImages">
              <img src={tissus} alt="tissus" />
              <img src={bain} alt="bain" />
              <img src={serrage} alt="serrage" />
            </div>
            <p className="containerText">
              Le soin se déroule <b>à votre domicile</b> dans une pièce de votre
              choix.
              <br />
              <br />
              Les trois <b>bougies</b> illuminent l'espace, la <b>musique</b>{" "}
              accompagne le rituel, l'odeur du <b>Palo Santo</b> purifie
              l'atmosphère et dégage un sentiment de <b>bien-être immédiat.</b>
              <br />
              <br />
              <b>→ Cercle d'accueil autour d'une tisane ritualisée:</b> Instant
              de <b>partage sur vos ressentis,</b> vos doutes, vos peurs, vos
              envies. Nous vous invitons à déposer un objet particulier à vos
              yeux afin de vous connecter à votre intention avec sérénité et
              confiance.
              <br />
              <br />
              <b>→ Massage intuitif à quatre mains:</b> Nous utilisons une{" "}
              <b>huile végétale biologique</b> pour détendre chaque partie de
              votre corps. Et pour une profonde relaxation, les{" "}
              <b>pierres chaudes</b> sont posées délicatement sur chaque partie
              de votre dos.
              <br />
              <br />
              <b>→ Rituel du bain:</b> Pétales de fleurs, sel de l'Himalaya,
              huiles essentielles. Ce bain vous libère de tensions et de pensées
              désagréables et vous transporte vers un{" "}
              <b>voyage sensoriel unique.</b>
              <br />
              <br />
              <b>→ Enveloppement:</b> Enveloppée sous des couvertures et{" "}
              <b>bercée par nos quatre mains</b> sous les notes chantantes du{" "}
              <b>bol tibétain,</b> cet instant permet à votre corps d'accéder à
              une toute nouvelle étape dans sa quête de changement.
              <br />
              <br />
              <b>→ Serrage:</b> Un resserrage du corps en <b>7 points</b> avec
              une attention toute particulière pour le bassin. Le resserrage
              tout comme le desserrage offre une{" "}
              <b>sensation incroyablement apaisante.</b>
              <br />
              <br />
              <b>→ Cercle de fermeture:</b> Une fois libérée des tissus Rebozo,
              nous vous invitons à revenir dans le cercle d'accueil. En
              soufflant sur votre bougie, vous décidez alors de clore votre
              rituel et d'
              <b>accueillir votre transformation.</b>
              <br />
              <br />
              Une <b>tisane effectuée par nos soins et ritualisée</b> est
              proposée tout au long du soin pour aider à détoxifier votre corps
              et à le maintenir dans un état de bien-être optimal.
            </p>
          </div>
          <div className="rebozoBenef">
            <h3>A quel moment puis-je bénéficier du soin ?</h3>
            <div className="setImages">
              <img src={femmebb} alt="un bébé serré par les bras de sa maman" />
              <img
                src={generation}
                alt="plusieurs personnes de génération différente"
              />
            </div>
            <p className="containerText">
              Il est possible d'en profiter dès la sortie de maternité pour les
              accouchements par voie basse, et une fois la cicatrisation
              terminée pour les accouchements par césarienne. Le rituel est
              adapté en fonction du vécu de chacune. Cependant, Julia et
              moi-même conseillons de le faire lorsque vous et votre enfant
              puissiez être séparés durant 4h (durée approximative du soin).
            </p>
          </div>
        </article>
        <div className="containerText mentions">
          <blockquote>
            Bonjour, je souhaiterai partager mon expérience avec vous, car j'ai
            eu l’opportunité et la chance de recevoir ce soin par Cindy et
            Julia, et je peux vous dire que c'était un moment très intense,
            magique et d’introspection positive. Elles sont douces, à l'écoute,
            elles accompagnent très bien le moment et le soin est juste
            fabuleux. Je recommande vivement ! Merci à vous deux.
          </blockquote>
          <cite>Témoignage d'une cliente ayant reçu le soin rituel Rebozo</cite>
        </div>
      </section>
    </div>
  );
};

export default Rebozo;
