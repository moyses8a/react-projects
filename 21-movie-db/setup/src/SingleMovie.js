import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from './context';

const SingleMovie = ({}) => {
  const { id } = useParams();
  const {movie, fetchMovie} = useGlobalContext();
  useEffect(() => {
    if (id) {
      fetchMovie(id)
    }
  }, [id]);
  const {Poster, Title, Year, imdbID, Plot} = movie;
  return <section className='single-movie'>
    <img src={Poster} alt={Title} />
    <div className="single-movie-info">
      <h2>{Title}</h2>
      <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
    </div>
  </section>
}

export default SingleMovie
