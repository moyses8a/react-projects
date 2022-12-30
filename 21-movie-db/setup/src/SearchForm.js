import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {search, setSearch, error} = useGlobalContext();
  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input type="text" className='form-input' value={search} onChange={(e) => setSearch(e.target.value)}/>
      {error && <div class="error">Movie not found!</div>}
    </form>
  )
}

export default SearchForm
