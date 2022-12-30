import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
        <section className='page-error'>
            <h2>No found</h2>
            <Link to={'/'} className='btn'>Back Home</Link>
        </section>
    )
}

export default Error