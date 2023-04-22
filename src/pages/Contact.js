import React from "react";
import Bandeau from "../components/Bandeau";

const Contact = () => {
  return (
    <div>
      <Bandeau title="POUR ME CONTACTER" accroche="Soyez acteur de votre vie" />
      <p className="textContact">
        Les informations saisies sur cette page sont confidentielles et
        sécurisées
      </p>
      <div className="zoneContact">
        <div className="infoContact">EN QUELQUES CLICS</div>
        <div className="form">
          <fieldset className="formBlock">
            <legend>Formulaire de contact</legend>

            <input type="text" id="nom" name="nom" placeholder="NOM" />
            <br />

            <input type="text" id="prenom" name="prenom" placeholder="PRENOM" />
            <br />

            <input
              type="text"
              id="telephone"
              name="telephone"
              placeholder="TELEPHONE"
            />
            <br />

            <textarea
              id="message"
              name="message"
              placeholder="MESSAGE"
            ></textarea>
            <br />

            <input type="submit" value="ENVOYER" className="Button"/>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Contact;
