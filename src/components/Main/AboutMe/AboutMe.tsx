import React from 'react';
import avatar from '../../../images/foto.jpg';
import arrow from '../../../images/arrow.png';
import './AboutMe.css';

export const AboutMe: React.FC = () => (
  <section className="content">
    <h2 className="main-section__title" id="student">Студент</h2>
    <div className="line line_light" />
    <div className="about-me">
      <div className="about-me__container">
        <h3 className="about-me__title">Аркадий</h3>
        <h4 className="about-me__subtitle">Фронтенд-разработчик, 28 лет</h4>
        <p className="main-section__text">
          Я родился и живу в Москве. После 10 лет в техподдержках (интернет-провайдер, e-commerce)
          понял, что не развиваюсь на своём месте, и пошёл в Яндекс.Практикум учиться новому.
          Учусь верстать и прогать с сентября 2020 года. Помимо учебных проектов, сделал бла бла бла
          бла бла бла бла бла бла
        </p>
        <div className="about-me__links">
          <a href="https://www.facebook.com/arkady.flitman" target="blank" className="link about-me__link">Facebook</a>
          <a href="https://github.com/konjvpaljto" target="blank" className="link about-me__link">Github</a>
        </div>
      </div>
      <img src={avatar} alt="Аркадий" className="about-me__avatar" />
    </div>
    <h3 className="portfolio__title">Портфолио</h3>
    <a href="https://konjvpaljto.github.io/how-to-learn/" target="blank" className="link portfolio__link">
      <div className="portfolio__container">
        <p className="portfolio__text">Статичный сайт</p>
        <img src={arrow} alt="перейти на сайт" />
      </div>
    </a>
    <div className="line line_dark" />
    <a href="https://konjvpaljto.github.io/russian-travel/" target="blank" className="link portfolio__link">
      <div className="portfolio__container">
        <p className="portfolio__text">Адаптивный сайт</p>
        <img src={arrow} alt="перейти на сайт" />
      </div>
    </a>
    <div className="line line_dark" />
    <a href="https://chesslamp.ru" target="blank" className="link portfolio__link">
      <div className="portfolio__container">
        <p className="portfolio__text">Pet-сайт</p>
        <img src={arrow} alt="перейти на сайт" />
      </div>
    </a>
    <div className="line line_dark" />
    <a href="https://mesto.flitman.ru/cards" target="blank" className="link portfolio__link">
      <div className="portfolio__container">
        <p className="portfolio__text">Одностраничное React-приложение</p>
        <img src={arrow} alt="перейти на сайт" />
      </div>
    </a>
  </section>
);
