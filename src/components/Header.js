import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Home</li>
          </NavLink>


          <NavLink
            to="/Favoris"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Favoris</li>
          </NavLink>
        </ul>
      </nav>
      <h1>
        React movies
       </h1>
    </div>

  );
};

export default Header;