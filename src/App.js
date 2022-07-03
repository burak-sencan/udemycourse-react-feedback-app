import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header.jsx'
import FeedBackList from './components/FeedbackList.jsx'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedBackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </div>
      </Router>{' '}
    </FeedbackProvider>
  )
}

export default App
