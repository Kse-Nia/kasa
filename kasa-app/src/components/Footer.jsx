import React from "react";
import FooterLogo from "../assets/footer_logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-logo" src={FooterLogo} alt="Kasa" />
      <h3>© 2020 Kasa. All rights reserver</h3>
    </footer>
  );
};

export default Footer;
