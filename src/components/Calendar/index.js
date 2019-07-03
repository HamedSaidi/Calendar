import React from 'react'

import NavContainer from '../../containers/CalendarNavContainer'
import MonthContainer from '../../containers/CalendarMonthContainer'
import Header from './Header'

export default React.memo(() => (
  <div className='calendar'>
    <NavContainer />
    <Header />
    <MonthContainer />
  </div>
))
