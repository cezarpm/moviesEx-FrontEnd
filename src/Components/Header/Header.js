import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <ul className="header__ul">
        <li className="header__ul__item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__ul__item">
          <Link to="/watchedmovies">Filmes Assistidos</Link>
        </li>
        <li className="header__ul__item">
          <Link to="/notwatchedmovies">Filmes não assistidos</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
