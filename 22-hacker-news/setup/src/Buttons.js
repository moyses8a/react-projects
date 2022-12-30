import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { page, nbPages, nextPage, prevPage } = useGlobalContext()

  return (
    <div className='btn-container'>
      <button onClick={prevPage}>prev</button>
      <p>{page + 1} of {nbPages}</p>
      <button onClick={nextPage}>next</button>
    </div>
  )
}

export default Buttons
