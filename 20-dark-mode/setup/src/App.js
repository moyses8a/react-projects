import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let darkMode = false;
  if (localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode');
  }
  return darkMode;
};

function App() {
  const [articles, setArticles] = useState(data);
  const [darkMode, setDarkMode] = useState(getStorageTheme());

  useEffect(() => {
    const theme = darkMode ? 'dark-theme' : 'light-theme';
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  const changeTheme = () => {
    setDarkMode((old) => !old);
  }

  return <main>
    <nav className="nav-center">
      <h1>overreacted</h1>
      <button className='btn' onClick={() => changeTheme()}>toogle</button>
    </nav>
    <section className="articles">
      {
        articles.map((article) => {
          console.log('id', article.id);
          return <Article key={`article${article.id}`} {...article}></Article>
        })
      }
    </section>
  </main>
}

export default App
