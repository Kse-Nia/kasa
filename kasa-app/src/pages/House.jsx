import React, { useState, useEffect } from "react";
import Slide from "../components/Slide";
import Tags from "../components/Tags";
import HouseRating from "../components/HouseRating";
import Modal from "../components/Modal";
import { useParams } from "react-router-dom"; // hook

const House = (props) => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
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
      }
    };
    fetchHouses();
  }, [id]);

  if (!house) return <p>Aucune maison n'a été trouvée</p>; // redir error
  if (error) return <p>Erreur : {error}</p>;

  // Divide name
  const name = house.host.name;
  const [firstName, lastName] = name.split(" ");

  return (
    <main>
      <section className="house">
        <div className="container">
          <Slide pictures={house.pictures} />
        </div>
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
                  alt="host"
                />
              </div>
              <HouseRating props={house.rating} />
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
          content={house.equipments}
          isOpen={openEquipment}
          onToggle={toggleModalEquipments}
          className="modal--housePage"
        />
      </section>
    </main>
  );
};

export default House;
