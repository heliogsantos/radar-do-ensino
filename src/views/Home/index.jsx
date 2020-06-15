import React, { useState } from 'react'

import './style.css'
import Card from '../../components/Card'
import Founder from '../../shared/Founder'

const Home = () => {

  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
  }

  const handleSearchText = (event) => setSearch(event.target.value)

  return (
    <div className="wraper-home padding-default">
      <div className="call padding-default">
        <h1>Encontre a escola perfeita <br/>
        e m qualquer região</h1>
      </div>
      <div className="padding-default">
        <form>
          <div className="field">
            <input onChange={handleSearchText} type="text" placeholder="Cidade ou bairro"/>
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
  )
}

export default Home