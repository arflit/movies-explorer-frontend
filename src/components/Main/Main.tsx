import React from 'react';
import './Main.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Promo } from './Promo/Promo';
import { NavTab } from './NavTab/NavTab';
import { AboutProject } from './AboutProject/AboutProject';
import { Techs } from './Techs/Techs';
import { AboutMe } from './AboutMe/AboutMe';

export const Main: React.FC = () => (
  <div className="page">
    <Header isMain />
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
    <Footer />
  </div>
);
