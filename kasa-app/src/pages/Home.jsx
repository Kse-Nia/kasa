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
  const [error, setError] = useState(null);
  const location = useLocation();
  const text = "Chez vous, partout et ailleurs";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/logements.json");
        // Check response
        if (!res.ok) {
          throw new Error("Une erreur est survenue");
        }
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();

  }, []);
  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(data);

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
