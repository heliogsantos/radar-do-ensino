import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import MinLogo from '../../shared/MinLogo'

const Footer = () => {
  return (
    <footer>
      <p>© 2020 Radardoensino, as melhores escolas do Brasil</p>
      <Link to="/">
        <MinLogo />
      </Link>
    </footer>
  );
}

export default Footer