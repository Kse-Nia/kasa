import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Banner from "../components/Banner";
import Card from "../components/Card";

// Asset
import BannerImage from "../assets/banner.png";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
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
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Banner picture={BannerImage} text={text} />
      <div className="container"></div>
      {data && (
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
