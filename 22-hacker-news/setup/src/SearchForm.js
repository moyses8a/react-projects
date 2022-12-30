import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { handleSearch, query } = useGlobalContext()
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <h2>search hacker news</h2>
      <input
        type='text'
        className='form-input'
        onChange={(e) => handleSearch(e.target.value)}
        value={query}
      />
    </form>
  )
}

export default SearchForm
