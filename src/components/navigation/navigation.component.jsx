import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.style.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/"
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/results"
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Results
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;