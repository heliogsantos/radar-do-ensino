import React from 'react'

import './style.css'

const CardSchool = (props) => {
  return (
    <div className="card-school">
      <div className="card-header">
        <img src={props.image} alt="Escola Tucuruvi"/>
      </div>
      <div className="card-body">
          <div className="inital">{props.name[0]}</div>
          <div className="description">
            <h3>{props.name}</h3>
            <h4>{props.schedule}</h4>
            <h5>{props.email}</h5>
          </div>
          <button className="btn btn-animation">perfil</button>
      </div>
    </div>
  );
}

export default CardSchool