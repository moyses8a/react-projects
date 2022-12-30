import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdownText, setMarkdownText] = useState('# markdown preview')

  return (
    <main>
      <section className='markdown'>
        <textarea className='input' value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}/>
        <article className='result'>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
