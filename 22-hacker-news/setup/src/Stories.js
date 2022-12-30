import React from 'react'

import { useGlobalContext } from './context'
import Story from './story';

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section className='stories'>
      {hits.map((story, index) => {
        return (
          <Story key={index} {...story}></Story>
        )
      })}
    </section>
  )
}

export default Stories
