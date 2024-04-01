import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Picture from "../assets/banner2.png";
import Modal from "../components/Modal";

const About = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Close/Open modal
  const [openModalIds, setOpenModalIds] = useState(new Set()); // Set of open modals id

  const onToggle = (id) => {
    setOpenModalIds((prevIds) => {
      const newIds = new Set(prevIds);
      if (newIds.has(id)) {
        newIds.delete(id);
      } else {
        newIds.add(id);
      }
      return newIds;
    });
  };

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
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
    <section className="about">
      <div>
        <Banner picture={Picture} />
      </div>
      {error && <div>Impossible d'afficher. Erreur : {error}</div>}
      <div className="about__content">
        {data &&
          data.map((section, index) => (
            <Modal
              key={index}
              title={section.title}
              content={section.text}
              id="modal_title-about"
              isOpen={openModalIds.has(index)}
              onToggle={() => onToggle(index)}
            />
          ))}
      </div>
    </section>
    </main>
  );
};

export default About;
