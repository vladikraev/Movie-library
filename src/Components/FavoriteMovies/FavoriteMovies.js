import React, { useState, useEffect } from 'react'
import style from './FavoriteMovies.module.css'

const FavoriteMovies = () => {

  const favApi = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=en-US&page=1'

  const [movies, setMovies] = useState()

  useEffect(() => {
    const getInfo = async () => {
      let response = await fetch(favApi)
      response = await response.json()
      setMovies(response.results)
    }
    getInfo()
  }, [])

  let posterPath = 'https://image.tmdb.org/t/p/original'
  let itemsToRender
  if (movies) {
    itemsToRender = movies.map(movie =>
      <div key={movie.id} className={style.poster}>
        <img src={`${posterPath + movie.poster_path}`} style={{ maxWidth: 300, maxHeight: 300 }} alt={movie.title} />
      </div>
    );
  } else {
    <div>Loading...</div>
  }
  console.log(movies);

  return (
    <div className={style.favorites}>
      {itemsToRender}
    </div>
  )
}

export default FavoriteMovies