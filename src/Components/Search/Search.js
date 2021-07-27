import style from './Search.module.css'
import React from 'react'
import { useHistory } from 'react-router'
import { Button, Link } from '@material-ui/core'

const Search = (props) => {
  const history = useHistory()

  const redirect = (e) => {
    e.preventDefault()
    history.push("/search")
  }

  return (
    <div>
      <div>
        <form action="" onSubmit={props.onSubmit} >
          <input className={style.searchField} type="text" onChange={props.onChange} placeholder='Search by movie title...' />
          {/* <Button component={Link} to="/search" variant="contained" type="submit" >
            Search
          </Button> */}
          <input type="submit" className={style.searchBox} value="Search" />
        </form>
      </div>
    </div >
  )
}
export default Search
