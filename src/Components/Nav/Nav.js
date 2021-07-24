import React from 'react'
import SearchBar from '../Search/Search'
import style from './Nav.module.css'
import { useHistory } from 'react-router-dom'

function Nav() {
  const history = useHistory();
  
  const handleRoute = () => {
    history.push("/");
  }

  return (
    <div className={style.navigation}>
      <h2 className={style.h2} onClick={handleRoute}>My Movie Collection</h2>
      <SearchBar />
    </div>
  )
}

export default Nav
