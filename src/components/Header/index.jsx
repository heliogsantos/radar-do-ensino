import React from 'react';

import './style.css';
import Menu from './Menu';

const Header = () => {

  const checkMenuRegister = (menuRegister) => menuRegister === 'CADASTRE-SE' ? 'btn btn-aimation' : null;

  return (
    <header>
      <div className="logo">
        <span>Radar<strong>do</strong>ensino</span>
      </div>
        <div className="menu">
          <ul>    
            {
              Menu.map((listMenu, index) => (
                  <li className={checkMenuRegister(listMenu)} key={index}>{listMenu}</li>
              ))
            }
          </ul>
        </div>
    </header>
    );
}

export default Header;
