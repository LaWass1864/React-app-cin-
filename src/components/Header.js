import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* composant de la navigation */}
      <nav>
        <ul>
          {/* il faut un <li> juste aprés le <ul> */}
          <li><NavLink
          //  on fait une ternaire pour savoir sur quelle page nous sommes
            to="/"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            Accueil
          </NavLink>
          </li>
          <li>
            <NavLink
              to="/Favoris"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              Coup de coeur
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>
        React movies
      </h1>
    </div>

  );
};

export default Header;