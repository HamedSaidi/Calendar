import React from 'react'
import PropTypes from 'prop-types'

const ReminderLabel = ({text, category, handleClick }) => (
  <div className={`reminder__label capitalize reminder__label--${category}`} onClick={handleClick}>
    {text}
  </div>
)

ReminderLabel.propTypes = {
  text: PropTypes.string,
  category: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}

ReminderLabel.defaultProps = {
  text: 'New Reminder'
}

export default React.memo(ReminderLabel)
