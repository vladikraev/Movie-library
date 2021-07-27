import React from "react"

const Movie = (props) => {
  return (
    <div className='card'>
      <div className='img'>
        {
          props.image === null ? <img src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} alt='card image' /> : <img src={`http://image.tmdb.org/t/p/w185/${props.img}`} alt='movie image' />
        }
      </div>
      {props.image}
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <small>{props.release}</small>
      <div>
        <hr />
      </div>
    </div>
  )
}

export default Movie