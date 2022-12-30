import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return <aside className={`sidebar-wrapper${isSidebarOpen ? ' show' : ''}`}>
    <div className="sidebar">
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes/>
      </button>
      <div className="sidebar-links">
        {sublinks.map((item, index) => {
          const {links, page} = item;
          return <article key={index}>
            <h4>{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((link, index) => {
                const {url, icon, label} = link;
                return <a key={index} href={url}>{icon}{label}</a>
              })}
            </div>
          </article>
        })}
      </div>
    </div>
  </aside>
}

export default Sidebar
