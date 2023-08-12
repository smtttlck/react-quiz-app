import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Quiz from './pages/quiz/Quiz'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz/:level' element={<Quiz />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
