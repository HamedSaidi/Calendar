import React from 'react'
import PropTypes from 'prop-types'


const CalendarNav = ({ currentMonthTitle, nextMonthAction, prevMonthAction }) => (
  <div className='calendar__nav'>
    <button onClick={prevMonthAction}>◀</button>
    <h2>
      {currentMonthTitle}
    </h2>
    <button onClick={nextMonthAction}>▶</button>
  </div>
)

CalendarNav.propTypes  = {
  currentMonthTitle: PropTypes.string.isRequired,
  nextMonthAction: PropTypes.func.isRequired,
  prevMonthAction: PropTypes.func.isRequired
}

export default CalendarNav
