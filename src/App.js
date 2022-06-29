import Header from './components/Header.jsx'
import FeedBackList from './components/FeedbackList.jsx'
import FeedbackData from './data/feedbackData'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className='container'>
        <FeedBackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
