import React from 'react'
import { useParams } from "react-router-dom";

import Check from '../../assets/check.svg'

import './style.css'

const Schools = () => {

  const { id } = useParams();

  return (
    <div className="schools-wraper">
        <div className="schools-length">
          <div className="box-left">
            <div className="check">
              <img src={Check} alt="Quantidade de Escolas"/>
            </div>
            <p>{id}</p>
          </div>
          <span className="length">20</span>
        </div>
        <div className="schools">
          
        </div>
    </div>
  );
}

export default Schools;