import React from 'react';

import './style.css';
import ImageFounder from '../../assets/imageFounder.jpg'

const Founder = () => {
  return (
    <div className="founder">
      <h3>Conheça o fundador</h3>
      <div className="card-founder">
        <div className="avatar">
          <img src={ImageFounder} alt="Helio Gonzaga Santos Júnior"/>
        </div>
        <h4>Hélio Gonzaga</h4>
        <p>Sejamos curiosos e compartilhemos os saberes!</p>
        <button className="btn btn-animation">Contactar</button>
      </div>
    </div>
  );
}

export default Founder;