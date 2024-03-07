import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Picture from "../assets/banner2.png";
import IconOpen from "../assets/row.svg";
import IconClose from "../assets/row2.svg";

const About = () => {
  const [openFiability, setOpenFiability] = useState(false);
  const [openRespect, setOpenRespect] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);

  return (
    <>
      <div>
        <Banner picture={Picture} />
      </div>
      <div className="modal">
        <div className="modal_title">
          <h1>Fiabilité</h1>
          <img
            src={openFiability ? IconClose : IconOpen}
            alt="icon"
            onClick={() => setOpenFiability((prev) => !prev)}
          />
        </div>
        {openFiability && (
          <p className="modal_text open">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        )}
      </div>
      <div className="modal">
        <div className="modal_title">
          <h1>Respect</h1>
          <img
            src={openRespect ? IconClose : IconOpen}
            alt="icon"
            onClick={() => setOpenRespect((prev) => !prev)}
          />
        </div>
        {openRespect && (
          <p className="modal_text open">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        )}
      </div>
      <div className="modal">
        <div className="modal_title">
          <h1>Service</h1>
          <img
            src={openService ? IconClose : IconOpen}
            alt="icon"
            onClick={() => setOpenService((prev) => !prev)}
          />
        </div>
        {openService && (
          <p className="modal_text open">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        )}
      </div>
      <div className="modal">
        <div className="modal_title">
          <h1>Sécurité</h1>
          <img
            src={openSecurity ? IconClose : IconOpen}
            alt="icon"
            onClick={() => setOpenSecurity((prev) => !prev)}
          />
        </div>
        {openSecurity && (
          <p className="modal_text open">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        )}
      </div>
    </>
  );
};

export default About;
