import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // hook

const House = (props) => {
    const { id } = useParams();
    const [house, setHouse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchHouses = async () => {
        try {
          const res = await fetch("/logements.json");
          if (!res.ok) {
            throw new Error("Une erreur est survenue, impossible d'afficher la maison");
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
  
    if (isLoading) return <div>Chargement en cours...</div>;
    if (error) return <div>Erreur : {error}</div>;
    if (!house) return <div>Aucune maison n'a été trouvée</div>;

  return (
    <div className="main">
     <div className="info">
     <img className="house cover" src={house.cover} alt="cover" />
        <h1>{house.title}</h1>
        <h2>{house.location}</h2>
        <div className="host">
          <h3>Hosted by {house.host.name}</h3>
          <img className="host_picture" src={house.host.picture} alt="host" />
        </div>
        <div className="rating">{house.rating}</div>
        <div className="tags">{house.tags}</div>
      </div>
      <div className="description_container">
        <div className="description_title">
          <p>Description</p>
        </div>
        <div>
          <p>{house.description}</p>
        </div>
        <div className="description_equipements">
          <p>Equipements</p>
        </div>
        <div>
          <p>{house.equipments}</p>
        </div>
      </div> 
    </div>
  );
};

export default House;
