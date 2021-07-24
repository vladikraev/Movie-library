import { useState, useEffect } from 'react'
import style from './Search.module.css'

const apiKey = '1b5adf76a72a13bad99b8fc0c68cb085'
console.log(apiKey);
const SearchBar = () => {
  const [movies, setMovies] = useState()
  const [input, setInput] = useState('')

  const getInfo = async () => {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`)
    response = await response.json()
    setMovies(response.results)
  }

  useEffect(() => {
    getInfo()
  }, [])

  let posterPath = 'https://image.tmdb.org/t/p/original'
  let itemsToRender
  if (movies) {
    itemsToRender = movies.map(movie =>
      <div key={movie.id}>
        <div >{movie.title}</div>
        <img src={`${posterPath + movie.poster_path}`} style={{ maxWidth: 300, maxHeight: 300 }} alt={movie.title} />
        <p>{movie.overview}</p>
        <hr />
      </div>
    );
  } else {
    <div>Loading...</div>
  }

  return (
    < div >
      <input
        type="text"
        id="header-search"
        placeholder="Search by movie title..."
        className={style.searchField}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit" className={style.searchBox} onClick={getInfo}>Search</button>
      
    </div >
  );
}
export default SearchBar;