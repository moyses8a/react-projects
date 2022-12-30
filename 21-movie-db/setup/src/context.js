import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${'e950ced4'}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (param) => {
    setLoading(true);
    const reponse = await fetch(`${API_ENDPOINT}&s=${search}`)
    const json = await reponse.json();
    console.log('json', json);
    if (json.Response == 'True') {
      setMovies(json.Search || []);
    } else {
      setError(json.Response);
    }
    setLoading(false);
  }

  const fetchMovie = async (id) => {
    setLoading(true);
    const reponse = await fetch(`${API_ENDPOINT}&i=${id}`)
    const json = await reponse.json();
    console.log('json', json);
    if (json.Response == 'True') {
      setMovie(json);
    } else {
      setError(json.Response);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, [search])

  return <AppContext.Provider value={{
    search,
    setSearch,
    movies,
    setLoading,
    loading,
    error,
    movie,
    setMovie,
    fetchMovie
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
