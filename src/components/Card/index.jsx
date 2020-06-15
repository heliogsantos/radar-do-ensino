import React from 'react'

import './style.css'

import Location from '../../assets/location.svg';
import Contact from '../../assets/contato.svg';
import Search from '../../assets/search.svg';

const Card = () => {
  return (
    <div className="card">
       <h2>Apenas com 3 passos</h2>

       <div className="progress">
         <div className="detail">
           <div className="icon">
             <img src={Search} alt="Localização"/>
           </div>
           <h3>Busque</h3>
           <p>a pérola rara entre diversos professores certificados, avaliados e disponíveis.</p>
         </div>

         <div className="detail">
           <div className="icon">
             <img src={Location} alt="Localização"/>
           </div>
           <h3>Encontre</h3>
           <p>a pérola rara entre diversos professores certificados, avaliados e disponíveis.</p>
         </div>

         <div className="detail">
           <div className="icon">
             <img src={Contact} alt="Localização"/>
           </div>
           <h3>Reserve</h3>
           <p>a pérola rara entre diversos professores certificados, avaliados e disponíveis.</p>
         </div>
       </div>
    </div>
  );
}

export default Card