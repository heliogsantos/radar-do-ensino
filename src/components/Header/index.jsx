import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Menu from './Menu';
import Logo from '../../shared/Logo';

const Header = () => {

  const checkMenuRegister = (menuRegister) => menuRegister === 'CADASTRE-SE' ? 'btn btn-animation' : null;

  return (
    <header>
        <Logo />
        <ul>    
          {
            Menu.map((listMenu, index) => (
                <li className={checkMenuRegister(listMenu)} key={index}>{listMenu}</li>
            ))
          }
        </ul>
    </header>
    );
}

export default Header;
