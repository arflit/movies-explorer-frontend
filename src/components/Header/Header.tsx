import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { Logo } from '../Logo/Logo';

type HeaderProps = {
  isMain?: boolean,
  loggedIn: boolean
};

export const Header: React.FC<HeaderProps> = ({ isMain = false, loggedIn }: HeaderProps) => {
  const headerClassName = `header ${isMain && 'header_main'}`;

  const signedOut = (
    <nav className="header__nav">
      <Link to="/signup" className="link header__link">Регистрация</Link>
      <Link to="/signin" className="link header__link">Войти</Link>
    </nav>
  );

  const signedIn = (
    <nav className="header__nav">
      <NavLink to="/movies" className="link header__link" activeClassName="link header__link_active">Фильмы</NavLink>
      <NavLink to="/saved-movies" className="link header__link" activeClassName="link header__link_active">Сохранённые фильмы</NavLink>
      <NavLink to="/profile" className="link header__link" activeClassName="link header__link_active">Аккаунт</NavLink>
    </nav>
  );

  function menu() {
    if (!loggedIn) {
      return signedOut;
    }
    return signedIn;
  }

  return (
    <header className={headerClassName}>
      <Logo />
      {menu()}
    </header>
  );
};
