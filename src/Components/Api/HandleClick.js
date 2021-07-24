import { useState } from 'react';
import Search from '../Search/'

const apiKey = process.env.REACT_APP_API

const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState('')

const HandleClick = () => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      setMovies(...data.result)
    })

}

export default HandleClick