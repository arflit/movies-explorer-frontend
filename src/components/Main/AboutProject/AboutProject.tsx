import React from 'react';
import './AboutProject.css';

export const AboutProject: React.FC = () => (
  <section className="content">
    <h2 className="main-section__title" id="about">О проекте</h2>
    <div className="line line_light" />
    <div className="main-section__columns">
      <div className="main-section__column">
        <h3 className="main-section__column-title">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="main-section__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </div>
      <div className="main-section__column">
        <h3 className="main-section__column-title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="main-section__text">
          У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
    </div>
    <div className="progress-bar">
      <div className="progress-bar__container_small">
        <div className="progress-bar__stripe progress-bar__stripe_green">
          <p className="progress-bar__text progress-bar__text_black">1 неделя</p>
        </div>
        <p className="progress-bar__annotation">Back-end</p>
      </div>
      <div className="progress-bar__container_big">
        <div className="progress-bar__stripe progress-bar__stripe_gray">
          <p className="progress-bar__text">4 недели</p>
        </div>
        <p className="progress-bar__annotation">Front-end</p>
      </div>
    </div>
  </section>
);
