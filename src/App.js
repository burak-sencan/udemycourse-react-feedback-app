import Header from './components/Header.jsx'
import FeedBackList from './components/FeedbackList.jsx'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

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
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
