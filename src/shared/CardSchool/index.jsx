import React from 'react'

import './style.css'
import Banner1 from '../../assets/banner1.png'
import Arrow from '../../assets/arrow-right.svg'

const CardSchool = () => {
  return (
    <div className="card-school">
      <div className="card-header">
        <img src={Banner1} alt="Escola Tucuruvi"/>
      </div>
      <div className="card-body">
          <div className="inital">C</div>
          <div className="description">
            <h3>Colegio Atena</h3>
            <h4>8:00 as 18:00</h4>
            <h5>contato@colegioatena.com.br</h5>
          </div>
          <button className="btn btn-animation">perfil</button>
      </div>
    </div>
  );
}

export default CardSchool