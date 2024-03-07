import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // hook

const House = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => {
        if (!res) {
          console.log("Impossible de récupérer data");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Une erreur est survenue");
      });
  }, []);

  console.log(data);

  return (
    <div className="main">
      <p>Hello</p>
      {/*  <div className="info">
        <h1>{data.title}</h1>
        <h2>{data.location}</h2>
        <div className="host">
          <h3>Hosted by {data.host.name}</h3>
          <img className="host_picture" src={data.host.picture} alt="host" />
        </div>
        <div className="rating">{data.rating}</div>
        <div className="tags">{data.tags}</div>
      </div>
      <div className="description_container">
        <div className="description_title">
          <p>Description</p>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div className="description_equipements">
          <p>Equipements</p>
        </div>
        <div>
          <p>{data.equipments}</p>
        </div>
      </div> */}
    </div>
  );
};

export default House;
