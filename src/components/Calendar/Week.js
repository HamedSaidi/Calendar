import React from 'react'
import PropTypes from 'prop-types'

import {getDayClass} from './helpers'
import ReminderItem from '../Reminder/Item'

const Week = ({week, index, actions, handleDoubleClick}) => (
  <div key={week.uuid} className='week'>
    {week.days.map((weekday, index) => (
      <div
        key={weekday.uuid}
        className={getDayClass(weekday.date, week.year)}
        onDoubleClick={() => handleDoubleClick(week.index, weekday.index, weekday.date)}
      >
        {weekday.date.format('D')}
        {weekday.reminders.map((reminder) => (
          <ReminderItem
            key={reminder.uuid}
            reminder={reminder}
            weekIndex={week.index}
            weekdayIndex={weekday.index}
            editReminder={actions.editReminder}
            deleteReminder={actions.deleteReminder}
          />
        ))}
      </div>
    ))}
  </div>
)

Week.propTypes = {
  week: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  handleDoubleClick: PropTypes.func.isRequired
}

export default Week
