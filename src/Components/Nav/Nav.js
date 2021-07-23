import React from 'react'
import SearchBar from '../Search/Search'
import style from './Nav.module.css'

function Nav() {
  return (
    <div className={style.navigation}>
      <h2>My Movie Collection</h2>
      <SearchBar />
    </div>
  )
}

export default Nav
