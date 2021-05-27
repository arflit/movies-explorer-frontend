import React from 'react';
import './Techs.css';

export const Techs: React.FC = () => (
  <section className="techs">
    <div className="content">
      <h2 className="main-section__title" id="techs">Технологии</h2>
      <div className="line line_light" />
      <div className="techs__container">
        <h3 className="techs__title">8 технологий</h3>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__icon-list">
          <li className="techs__icon">HTML</li>
          <li className="techs__icon">CSS</li>
          <li className="techs__icon">JavaScript</li>
          <li className="techs__icon">TypeScript</li>
          <li className="techs__icon">React.js</li>
          <li className="techs__icon">Git</li>
          <li className="techs__icon">Express.js</li>
          <li className="techs__icon">MongoDB</li>
        </ul>
      </div>
    </div>
  </section>
);
