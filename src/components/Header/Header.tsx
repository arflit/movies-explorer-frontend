import React from 'react';
import './Header.css';
import { Logo } from '../Logo/Logo';

interface HeaderProps {
  isMain: boolean;
}

function Header(props: HeaderProps) {
  const { isMain } = props;

  const headerClassName = `header ${isMain && 'header_main'}`;

  return (
    <header className={headerClassName}>
      <Logo />
    </header>
  );
}

export { Header };
