import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import Check from '../../assets/check.svg'
import './style.css'
import CardSchool from '../../shared/CardSchool';
import Api from '../../services/api' 

const Schools = () => {

  const [schools, setSchools] = useState([])
  const { id } = useParams();

  useEffect(() => {
    Api.get('/schools').then((response) => setSchools(response.data.filter(school => school.address.neighborhood === id)));
  },[]);

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
          <div className="card-wraper">
            {schools.map((school, index) => (
              <CardSchool key={index} image={school.banner} name={school.name} schedule={school.houer} email={school.email}/>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Schools;