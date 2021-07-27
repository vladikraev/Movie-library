import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Nav from '../../Nav/Nav'
import Search from '../../Search/Search'
import MovieList from '../../MovieList/MovieList'

const SearchPage = () => {
  const history = useHistory()
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("");
  const apiKey = '1b5adf76a72a13bad99b8fc0c68cb085'
  const result = useAsyncHook(query, apiKey)

  function useAsyncHook(searchMovie, apiKey) {
    const [result, setResult] = useState([])

    useEffect(() => {
      const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchMovie}`)
        const json = await response.json()
        console.log(json);
        console.log(search);
        setResult(json.results)
      }

      if (searchMovie !== '') {
        fetchMovies()
      }
    }, [searchMovie])

    return result
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  const onChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div>
      <Nav />
      <h2>Search</h2>
      <Search onSubmit={onSubmit} onChange={onChange} />
      <br />
      <MovieList result={result} />
      {/* <form action="" onSubmit={onSubmit}>
        <input type="text" onChange={onChange} placeholder='search movie...' />
        <input type="submit" value="Search" />
      </form> */}
      {/* {result.map((movie, index) => {
        return <p key={index}>{movie.title}</p>;
      })} */}
    </div>
  )
}

export default SearchPage