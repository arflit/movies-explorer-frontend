import React from 'react';
import './NavTab.css';

export const NavTab: React.FC = () => (
  <section className="navtab">
    <nav>
      <ul className="navtab__menu">
        <li className="navtab__linkContainer">
          <a className="link navtab__link" href="#about">О проекте</a>
        </li>
        <li className="navtab__linkContainer">
          <a className="link navtab__link" href="#techs">Технологии</a>
        </li>
        <li className="navtab__linkContainer">
          <a className="link navtab__link" href="#student">Студент</a>
        </li>
      </ul>
    </nav>
  </section>
);
