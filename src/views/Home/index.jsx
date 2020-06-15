import React, { useState } from 'react'

import './style.css'
import Card from '../../components/Card'

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
    </div>
  )
}

export default Home