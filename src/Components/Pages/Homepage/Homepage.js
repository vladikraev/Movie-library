import React from 'react'
import Nav from '../../Nav/Nav'
import Slideshow from '../../../Slideshow/Slideshow'
import Heading from '../../Heading/Heading'
import Favorites from '../../Favorites/Favorites'

function Homepage() {
  return (
    <div>
      <Nav />
      <Slideshow />
      <Heading />
      <Favorites />
    </div>
  )
}

export default Homepage