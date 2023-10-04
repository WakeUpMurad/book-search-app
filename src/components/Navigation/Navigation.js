import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Navigation.module.css'

const Navigation = () => {
  return (
      <nav className={cl.navigation}>
        <ul className={cl.nav__ul}>
            <li className={cl.nav__list}>
              <Link className={cl.nav__link} to="/">Home</Link>
            </li>
            <li className={cl.nav__list}>
              <Link className={cl.nav__link} to="/search">Search</Link>
            </li>
            <li className={cl.nav__list}>
              <Link className={cl.nav__link} to="/about">About</Link>
            </li>
        </ul>
      </nav>
  );
};

export default Navigation;
