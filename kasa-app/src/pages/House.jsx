import React, { useState, useEffect } from "react";
import Tags from "../components/Tags";
import HouseRating from "../components/HouseRating";
import { useLocation, useParams } from "react-router-dom"; // hook
import IconOpen from "../assets/row.svg";
import IconClose from "../assets/row2.svg";

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const House = (props) => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Close/Open modal
  const [openDescription, setOpenDescription] = useState(false);
  const [openEquipment, setOpenEquipment] = useState(false);

  const toggleModalDescription = () => {
    setOpenDescription(!openDescription);
  };

  const toggleModalEquipments = () => {
    setOpenEquipment(!openEquipment);
  };

  // Fetch data
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const res = await fetch("/logements.json");
        if (!res.ok) {
          throw new Error(
            "Une erreur est survenue, impossible d'afficher la maison"
          );
        }
        const houses = await res.json();
        const houseHouse = houses.find((house) => house.id.toString() === id);
        if (!houseHouse) {
          throw new Error("Désolé, maison introuvable..");
        }
        setHouse(houseHouse);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouses();
  }, [id]);

  if (isLoading) return <p>Chargement en cours...</p>;
  if (!house) return <p>Aucune maison n'a été trouvée</p>; // redir error
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="main">
      <div className="house">
        <img className="house_cover" src={house.cover} alt="cover" />
        <div className="house__content">
          <div className="house_info">
            <h1 className="house_title">{house.title}</h1>
            <h2 className="house_location">{house.location}</h2>
            <div className="house_alltags">
              {house.tags.map((tags) => {
                return <Tags key={tags} tags={tags} />;
              })}
            </div>
          </div>

          <div className="house_host_info">
            <div className="house_host">
              <div className="house_host_container">
                <h3 className="house_host_name">{house.host.name}</h3>
                <img
                  className="house_host_picture"
                  src={house.host.picture}
                  alt="host"
                />
              </div>
              <HouseRating rating={house.rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="house_description-container">
        <div
          className="house_description-container_title"
          onClick={toggleModalDescription}
        >
          <div className="modal_title">
            <h2 className="modal_type">Description</h2>
            <img
              src={openDescription ? IconOpen : IconClose}
              alt="icon"
              onClick={() => setOpenDescription((prev) => !prev)}
            />
          </div>
        </div>
        {openDescription && (
          <div className="house_modal">
            <div className="house_description-container_title"></div>
            <div>
              <p>{house.description}</p>
            </div>
          </div>
        )}

        <div
          className="house_description-container_title"
          onClick={toggleModalEquipments}
        >
          <div className="modal_title">
            <h2 className="modal_type">Equipment</h2>
            <img
              src={openDescription ? IconOpen : IconClose}
              alt="icon"
              onClick={() => setOpenEquipment((prev) => !prev)}
            />
          </div>
        </div>
        {openEquipment && (
          <div className="house_modal">
            <div>
              <p>{house.equipments.join(", ")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default House;
