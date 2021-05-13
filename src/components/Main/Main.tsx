import React from 'react';
import './Main.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

type MainProps = {
  loggedIn: boolean
};

export const Main: React.FC<MainProps> = ({ loggedIn }: MainProps) => (
  <main>
    <Header isMain loggedIn={loggedIn} />
    <Footer />
  </main>
);
