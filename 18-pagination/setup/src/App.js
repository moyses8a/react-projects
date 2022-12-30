import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch();
  const [followers, setFollowers] = useState([]);
  const [pageOpts, setPageOpts] = useState([5,10,20]);
  const [pages, setPages] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 10
  });

  useEffect(() => {
    const count = Math.ceil(data.length / pagination.pageSize);
    setPages(Array.from({length: count}, (_, index) => index));
  }, [data, pagination]);

  useEffect(() => {
    setFollowers(data.slice(pagination.pageSize * pagination.page, pagination.pageSize * (pagination.page + 1)));
  }, [data, pagination])

  const handlePage = (index) => {
    setPagination((old) => ({ ...old, page: index }))
  }

  const handlePageSize = (v) => {
    setPageSize(v);
    setPagination((old) => ({ ...old, page: 0 }))
  }

  const nextPage = () => changePage(1);
  const prevPage = () => changePage(-1);
  const setPageSize = (v) => setPagination((old) => ({...old, pageSize: v}))

  const changePage = (value) => {
    let newPage = pagination.page;
    const max = Math.ceil(data.length / pagination.pageSize);
    if ((pagination.page + value) >= max) newPage = 0
    else if ((pagination.page + value) < 0) newPage = max - 1;
    else newPage = pagination.page + value;
    setPagination((old) => ({...old, page: newPage}));
  }

  if (loading) {
    return <main>
      <div className="section-title">
        <h1>Loading</h1>
      </div>
    </main>
  }

  return <main>
    <div className="section-title">
      <h1>pagination</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {followers.map((item) => {
          return <Follower key={item.id} {...item}/>
        })}
      </div>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>prev</button>
        {
          pages.map((item) => {
            return <button key={`btn${item}`} className={`page-btn ${ item == pagination.page && 'active-btn' }`} onClick={() => handlePage(item)}>{item + 1}</button>
          })
        }
        <button className="next-btn" onClick={nextPage}>next</button>
        <div className="form-control">
          <select name='pageSize' className='form-input' onChange={(e) => handlePageSize(e.currentTarget.value)} value={pagination.pageSize}>
            {pageOpts.map((opt) => {
              return <option value={opt} key={`pageOpt${opt}`}>{opt}</option>
            })}
          </select>
          <label htmlFor="pageSize">Per page</label>
        </div>
      </div>
    </section>
  </main>
}

export default App
