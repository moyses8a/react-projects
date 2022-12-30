import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quizConfig: {amount, category, difficulty}, setQuizConfig, fetchQuestions } = useGlobalContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchQuestions()
  }
  const handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    if (field && value) {      
      setQuizConfig((old) => ({
        ...old,
        [field]: value
      }))
    }
  }
  return (
    <main>
    <section className='quiz quiz-small'>
      <form className='setup-form'>
        <h2>setup quiz</h2>
        {/* amount */}
        <div className='form-control'>
          <label htmlFor='amount'>number of questions</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={amount}
            onChange={handleChange}
            className='form-input'
            min={1}
            max={50}
          />
        </div>
        {/* category */}

        <div className='form-control'>
          <label htmlFor='category'>category</label>
          <select
            name='category'
            id='category'
            className='form-input'
            value={category}
            onChange={handleChange}
          >
            <option value='sports'>sports</option>
            <option value='history'>history</option>
            <option value='politics'>politics</option>
          </select>
        </div>
        {/* difficulty */}

        <div className='form-control'>
          <label htmlFor='difficulty'>select difficulty</label>
          <select
            name='difficulty'
            id='difficulty'
            className='form-input'
            value={difficulty}
            onChange={handleChange}
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
        </div>
        <button type='submit' onClick={handleSubmit} className='submit-btn'>
          start
        </button>
      </form>
    </section>
  </main>
  )
}

export default SetupForm
