import React, { useEffect, useRef, useState } from "react";
import Headband from "../components/Headband";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const phoneNumber = "0618010504";
  const [successForm, setSuccessForm] = useState(false);
  const publique_key = process.env.REACT_APP_FORMULAIRE_PUBLIC_API_KEY;
  const template_key = process.env.REACT_APP_FORMULAIRE_TEMPLATE_KEY;
  const service_key = process.env.REACT_APP_FORMULAIRE_SERVICE_KEY;

  const sendEmail = (e) => {
    console.log(e);
    e.preventDefault();

    emailjs
      .sendForm(service_key, template_key, form.current, publique_key)
      .then(
        (result) => {
          setSuccessForm(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  // L autofocus ne fonctionne pas toujours au chargement de la page
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('nom').focus();
    }, 0);
  }, []);
  

  return (
    <div>
      <Headband title="POUR ME CONTACTER" accroche="Soyez acteur de votre vie" id="contact" />
      <p className="textContact">
        Les informations saisies sur cette page sont confidentielles et
        sécurisées
      </p>
      <div className="zoneContact">
        <div className="infoContact">
          <p>EN QUELQUES CLICS</p>
          <div>
            <Link to={`tel:${phoneNumber}`}>
              <FontAwesomeIcon
                icon={faMobileScreen}
                alt="icône d'un mobile"
                size="3x"
              />{" "}
              06 18 01 05 04
            </Link>
          </div>
          <div>
            <Link
              to="mailto:contact@cindy-naturopathe.com"
              rel="noopener noreferrer"
              target="_blanck"
            >
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                alt="icône de boîte mail"
                size="3x"
              />{" "}
              contact@cindy-naturopathe.com
            </Link>
          </div>
          <div>
            <Link
              to="https://www.google.com/maps/place/555+Av.+de+la+R%C3%A9publique,+83560+Vinon-sur-Verdon,+France/@43.7237412,5.8085825,17z/data=!3m1!4b1!4m5!3m4!1s0x12cbd3fe914b43cf:0x375d962996198d12!8m2!3d43.7237412!4d5.8107712"
              rel="noopener noreferrer"
              target="_blanck"
              className="d-flex"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                alt="icône de localisation"
                size="3x"
              />{" "}
              <p className="mx-1">555, avenue de la république
              <br />
              83 560 Vinon-sur-Verdon{" "}</p>
            </Link>
          </div>
        </div>
        <form className="form" id="form" ref={form} onSubmit={sendEmail}>
          {successForm && (
            <p className="successForm">
              Les données ont bien été envoyées, je reviens vers vous rapidement
            </p>
          )}
          <fieldset className={successForm && "d-none"}>
            <legend>Formulaire de contact</legend>

            <input
              type="text"
              id="nom"
              name="name"
              placeholder="NOM"
              autoFocus
            />
            <input
              type="text"
              id="prenom"
              name="firstname"
              placeholder="PRENOM"
            />
            <input
              type="text"
              id="telephone"
              name="tel"
              placeholder="TELEPHONE"
            />
            <textarea
              id="message"
              name="message"
              placeholder="MESSAGE"
            ></textarea>
            <input type="submit" value="ENVOYER" className="Button" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
