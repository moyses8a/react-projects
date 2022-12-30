import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({Poster, Title, Year, imdbID}) => {
  return <Link className='movie' to={`/movies/${imdbID}`}>
    <article>
      <img src={Poster} alt={Title} />
      <div className="movie-info">
        <h4 className="title">{Title}</h4>
        <p>{Year}</p>
      </div>
    </article>
  </Link>
}

export default Movie