import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState();
  const [showMenu, setShowMenu] = useState(true);
  const [markAnswer, setMarkAnswer] = useState(false);
  const [randomIndex, setRandomIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizConfig, setQuizConfig] = useState({
    amount: 10,
    difficulty: 'easy',
    category: 'sports'
  });

  const fetchQuestions = async () => {
    setLoading(true);
    const {amount, difficulty, category} = quizConfig;
    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.results);
    setQuestions(json.results);
    setIndex(0);
    setPoints(0);
    setShowMenu(false);
    randomNumber();
    setLoading(false);
  }

  const addPoint = () => setPoints((old) => old + 1);

  const nextQuestion = () => {
    if (index + 1 > questions.length - 1) {
      setShowModal(true);
    } else {
      setIndex((old) => old + 1);
      setMarkAnswer(false);
      randomNumber();
    }
  }

  const randomNumber = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    setRandomIndex(randomIndex);
  }

  const closeModal = () => {
    setShowMenu(true);
    setShowModal(false);
    setMarkAnswer(false);
  };

  return <AppContext.Provider value={{
    fetchQuestions,
    questions,
    index,
    nextQuestion,
    addPoint,
    points,
    showMenu,
    markAnswer,
    setMarkAnswer,
    setShowMenu,
    quizConfig,
    setQuizConfig,
    randomIndex,
    showModal,
    closeModal,
    loading
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
