import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { Logo } from '../Logo/Logo';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

type HeaderProps = {
  isMain?: boolean,
};

export const Header: React.FC<HeaderProps> = ({ isMain = false }: HeaderProps) => {
  const currentUser = React.useContext(CurrentUserContext);
  const { loggedIn } = currentUser;

  const headerClassName = `header ${isMain && 'header_main'}`;

  const signedOut = (
    <nav className="header__nav">
      <Link to="/signup" className="link header__link">Регистрация</Link>
      <Link to="/signin" className="link header__signin-button">Войти</Link>
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
      <div className="content header__content">
        <Logo />
        {menu()}
      </div>
    </header>
  );
};
