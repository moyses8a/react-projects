import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }
  return <>
    <section className='container'>
      <h3>colors generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='#000' value={color} onChange={(e) => setColor(e.target.value)} className={`${error ? 'error' : null}`} />
        <button type="submit" className='btn'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {
        list.map((color, index, array) => {
          return <SingleColor key={index} {...color} index={index} hex={color.hex}></SingleColor>
        })
      }
    </section>
  </>
}

export default App
