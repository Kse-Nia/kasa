import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

// Components
import Banner from "../components/Banner";
import Card from "../components/Card";

// Asset
import BannerImage from "../assets/banner.png";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const text = "Chez vous, partout et ailleurs";

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
        //console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Une erreur est survenue");
      });
  }, []);

  return (
    <>
      <Banner picture={BannerImage} text={text} />
      <div className="container"></div>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div className="container">
          {data.map((house) => (
            <Link
              key={house.id}
              to={{
                pathname: `/houses/${house.id}`,
                state: { house: house },
              }}
            >
              <Card {...house} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
