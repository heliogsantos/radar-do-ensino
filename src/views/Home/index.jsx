import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './style.css'
import Card from '../../components/Card'
import Founder from '../../shared/Founder'
import Api from '../../services/api'

const Home = () => {

  const [search, setSearch] = useState('')
  const [schools, setSchools] = useState([])

  const handleSearch = (event) => {
    event.preventDefault()
  }

  const serachNameEndCity = (school, searchSchool) => 
    school.address.neighborhood.toLowerCase().includes(searchSchool) || 
    school.address.city.toLowerCase().includes(searchSchool)

  const getApiSchols = async (searchSchool) => {
    const school = await (await Api.get('/school')).data.filter(item => serachNameEndCity(item, searchSchool))
    return setSchools(school)
  }

  const searchSchools = (event) => {
    setSearch(event.target.value)
    search.length >= 4 ? getApiSchols(search) : setSchools([])
  }

  return (
    <div className="wraper-home">
      <div className="content padding-default">
        <div className="call padding-default">
          <h1>Encontre a escola perfeita <br/>
          em qualquer região</h1>
        </div>
        <div className="padding-default">
          <form>
            <div className="field">
              <input onInput={searchSchools} type="text" placeholder="Cidade ou bairro"/>
              <div className="result-search">
                  <ul>
                    {schools.length ? schools.map((item, index) => (
                      <li key={index}><Link to={`schools/${item.address.neighborhood}`}><strong>{item.address.city}</strong> {item.address.neighborhood}</Link></li>
                    )) : null}
                  </ul>
              </div>
            </div>
            <button onClick={handleSearch} type="submit" className="btn btn-animation">buscar</button>
          </form>
        </div>
        <Card />
        <div className="sub-title">
          <h4>Aprenda <br/>
          tudo o que quiser</h4>
          <p>Torne-se um mestre na arte da cozinha ou uma estrela nos palcos! Torne-se um mestre na arte da cozinha ou uma estrela.</p>
        </div>
        <div className="founder-content">
          <Founder />
        </div>
      </div>
    </div>
  )
}

export default Home