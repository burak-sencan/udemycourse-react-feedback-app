import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from './components/Header.jsx'
import FeedBackList from './components/FeedbackList.jsx'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
                <AboutIconLink />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
