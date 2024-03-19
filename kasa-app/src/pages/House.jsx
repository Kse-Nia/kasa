import React, { useState, useEffect } from "react";
import ErrorPage from "../pages/Error404";
import Slide from "../components/Slide";
import Tag from "../components/Tag";
import HouseRating from "../components/HouseRating";
import Modal from "../components/Modal";
import { useParams, useNavigate } from "react-router-dom"; // hook

const House = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [house, setHouse] = useState(null);
  const [houseFound, setHouseFound] = useState(true);
  const [error, setError] = useState(null);

  // Close/Open each type of modal
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
            "Une erreur est survenue, impossible d'afficher la maison séléctionnée."
          );
        }
        const houses = await res.json();
        const houseId = houses.find((house) => house.id.toString() === id);
        if (!houseId) {
          throw new Error("Désolé, maison introuvable..");
        }
        setHouse(houseId);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchHouses();
  }, [id]);

  if (!house) return <ErrorPage />; // Redirect to 404 page if house not found
  if (error) return <p>Erreur : {error}</p>; // Display error message if fetch failed

  // Divide name
  const name = house.host.name;
  const [firstName, lastName] = name.split(" ");

  return (
    <main>
      <section className="house">
        <div className="container--house">
          <Slide pictures={house.pictures} />
        </div>
        <div className="house__content">
          <div className="house_info">
            <h1 className="house_title">{house.title}</h1>
            <h2 className="house_location">{house.location}</h2>
            <div className="house__tags">
              {house.tags.map((tags) => {
                return <Tag key={tags} tags={tags} />;
              })}
            </div>
          </div>

          <div className="host">
            <div className="host__maincontainer">
              <div className="host__container">
                <div className="host__namecontainer">
                  <p className="host--name">{firstName}</p>
                  <p className="host--name">{lastName}</p>
                </div>
                <img
                  className="host__container--picture"
                  src={house.host.picture}
                  alt={house.host.name}
                />
              </div>
              <HouseRating rating={house.rating} />
            </div>
          </div>
        </div>
      </section>

      <section className="modal__container">
        <Modal
          title="Description"
          content={house.description}
          isOpen={openDescription}
          onToggle={toggleModalDescription}
          className="modal--housePage"
        />
        <Modal
          title="Equipements"
          content={
            <ul>
              {house.equipments.map((equipment, index) => (
                <li className="modal_text-equipment" key={index}>
                  {equipment}
                </li>
              ))}
            </ul>
          }
          isOpen={openEquipment}
          onToggle={toggleModalEquipments}
          className="modal--housePage"
        />
      </section>
    </main>
  );
};

export default House;
