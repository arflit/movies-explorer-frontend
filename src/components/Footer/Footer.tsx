import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="content footer__content">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="line line_dark" />
      <div className="footer__navContainer">
        <p className="footer__copyright">© 2021</p>
        <nav>
          <ul className="footer__links">
            <li className="footer__linkContainer">
              <a className="link footer__link" target="blank" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
            </li>
            <li className="footer__linkContainer">
              <a className="link footer__link" target="blank" href="https://github.com/konjvpaljto">Github</a>
            </li>
            <li className="footer__linkContainer">
              <a className="link footer__link" target="blank" href="https://www.facebook.com/arkady.flitman">Facebook</a>
            </li>
            <li className="footer__linkContainer">
              <a className="link footer__link" target="blank" href="https://hh.ru/resume/e962b09dff08c422120039ed1f704f4f63647a">HH</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);
