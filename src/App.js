import Header from './components/Header.jsx'
import FeedBackList from './components/FeedbackList.jsx'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats.jsx'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
