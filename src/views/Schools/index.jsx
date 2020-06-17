import React from 'react'
import { useParams } from "react-router-dom";

import './style.css'

const Schools = () => {
  const { id } = useParams();
  return (
    <div className="schools-wraper">
        <div className="card-school"></div>
        <div className="card-school"></div>
        <div className="card-school"></div>
        <div className="card-school"></div>
    </div>
  );
}

export default Schools;