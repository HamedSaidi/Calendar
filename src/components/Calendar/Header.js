import React from 'react'

const CalendarHeader = React.memo(() => (
  <div className='calendar__header'>
    <div>Sun</div>
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
  </div>
))

export default CalendarHeader
