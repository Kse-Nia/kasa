import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

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
