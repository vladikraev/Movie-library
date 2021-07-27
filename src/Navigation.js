import React from 'react'
import Homepage from './Components/Pages/Homepage/Homepage'
import SearchPage from './Components/Pages/Searchpage/Searchpage'
import MovieTitle from './Components/Pages/MovieTitle/MovieTitle'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/movies/movie-title' component={MovieTitle} />
        <Redirect from='*' to='/'  />

      </Switch>
    </BrowserRouter>
  )
}

export default Navigation