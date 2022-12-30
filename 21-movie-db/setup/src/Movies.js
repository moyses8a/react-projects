import React from 'react'
import { useGlobalContext } from './context'
import Movie from './movie'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies } = useGlobalContext();
  return <section className='movies'>
    { movies.map((movie) => {
      return <Movie key={movie.imdbID} {...movie}></Movie>
    }) }
  </section>
}

export default Movies
