import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error_container">
      <p className="">404</p>
      <p>Oups ! La page que vous demandez n'existe pas</p>
      <NavLink className="error-navlink" to="/">
        Retourner à la page d'accueil
      </NavLink>
    </div>
  );
};

export default ErrorPage;
