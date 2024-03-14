import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Picture from "../assets/banner2.png";
import Modal from "../components/Modal";
import IconOpen from "../assets/row.svg";
import IconClose from "../assets/row2.svg";

const About = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/about.json");
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

  return (
    <>
      <div>
        <Banner picture={Picture} />
      </div>
      {data &&
        data.map((section, index) => (
          <Modal
            key={section.id}
            title={section.title}
            content={section.title}
          />
        ))}
    </>
  );
};

export default About;
