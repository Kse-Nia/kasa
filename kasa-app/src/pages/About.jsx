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

  // Close/Open modal
  const [openModalIds, setOpenModalIds] = useState(new Set()); // Set of open modals id

  const onToggle = (id) => {
    setOpenModalIds(prevIds => {
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
            key={index}
            title={section.title}
            content={section.text}
            isOpen={openModalIds.has(index)}
          onToggle={() => onToggle(index)}
          />
        ))}
    </>
  );
};

export default About;
