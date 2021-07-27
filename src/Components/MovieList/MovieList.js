import React from 'react'
import Movie from '../Movie/Movie'

const MovieList = (props) => {
  return (
    <div>
      {props.result.map((movie) => {
        return <Movie key={movie.id} title={movie.title} img={movie.poster_path} desc={movie.overview} release={movie.release_date} />
      })}
    </div>
  )
}

export default MovieList