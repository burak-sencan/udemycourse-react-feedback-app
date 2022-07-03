import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext.js'
import Card from './shared/Card.jsx'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'

function Feedback({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button
        onClick={() => {
          deleteFeedback(item.id)
        }}
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <button
        className='edit'
        onClick={() => {
          editFeedback(item)
        }}
      >
        <FaEdit color='purple' />
      </button>
      <div className='text-display'> {item.text} </div>
    </Card>
  )
}

Feedback.propTypes = {
  item: PropTypes.object.isRequired,
}
export default Feedback
