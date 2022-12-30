import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {

  const { questions, showMenu, points, index, quizConfig, addPoint, nextQuestion, markAnswer, setMarkAnswer, randomIndex, showModal, loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  if (showMenu) {
    return (<SetupForm></SetupForm>)
  }

  if (showModal) {
    return (
      <main>
        <Modal />
      </main>
    )
  }
  
  const { question, incorrect_answers, correct_answer } = questions[index];

  let answers = []
  const incorrectAnswers = [...incorrect_answers];
  console.log('correct', correct_answer);
  while (answers.length < 4) {
    if (answers.length === randomIndex) {
      answers.push(correct_answer);
    } else answers.push(incorrectAnswers.pop())
  }

  const checkAnswer = (e, correct) => {
    if (!markAnswer) {
      setMarkAnswer(true);
      if (correct) {
        addPoint();
      }
    }
  }

  return <main>
    <section className="quiz">
    <p className='correct-answers'>
          correct answers : {points}/{quizConfig.amount}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  disabled={markAnswer}
                  className={`answer-btn ${markAnswer && (correct_answer === answer ? 'correct-answer' : 'wrong-answer')}`}
                  onClick={(e) => checkAnswer(e, correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
        </article>
        { markAnswer && (
          <button className='next-question' onClick={nextQuestion}>
            next question
          </button>
        )}

    </section>
  </main>
}

export default App
