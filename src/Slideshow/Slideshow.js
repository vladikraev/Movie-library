import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import style from './Slideshow.module.css'

const slideImages = [
  {
    url: 'https://res.cloudinary.com/vladeto83/image/upload/c_scale,w_1200/v1626958120/movie-poster-1.jpg'
  },
  {
    url: 'https://res.cloudinary.com/vladeto83/image/upload/c_scale,w_1200/v1626958120/movie-poster-2.jpg'
  },
  {
    url: 'https://res.cloudinary.com/vladeto83/image/upload/c_scale,w_1200/v1626958120/movie-poster-3.jpg'
  },
  {
    url: 'https://res.cloudinary.com/vladeto83/image/upload/c_scale,w_1200/v1626958120/movie-poster-4.jpg'
  },
  {
    url: 'https://res.cloudinary.com/vladeto83/image/upload/c_scale,w_1200/v1626958120/movie-poster-5.jpg'
  }
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div className={style.slide} style={{ 'backgroundImage': `url(${slideImage.url})` }} />
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Slideshow