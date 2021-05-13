import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Logo.css';

export function Logo() {
  return (
    <Link className="link" to="/">
      <img src={logo} alt="logo" className="logo" />
    </Link>
  );
}
