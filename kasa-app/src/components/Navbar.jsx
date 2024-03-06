import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <Link to="/">
            <img src={Logo} className="navbar_logo-image" alt="Kasa" />
          </Link>
        </div>
        <div className="navbar_links">
          <ul>
            <li>
              <NavLink className="navbar_links-link" to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar_links-link" to="/about">
                A Propos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
