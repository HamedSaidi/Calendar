import moment from 'moment'

const updatedMonth = (state, action) => {
  const updatedMonth = state.month.map((week, index) => {
    if (action.payload.weekIndex === index)
      return doUpdateWeekDay(week, action)

    return week
  })

  return {
    ...state,
    month: updatedMonth
  }
}

const doUpdateWeekDay = (week, action) => {
  const dayToUpdate = week.days[action.payload.weekdayIndex]
  dayToUpdate.reminders = dayToUpdate.reminders.map((reminder) => {
    if (reminder.uuid === action.payload.reminder.uuid)
      return {
        ...reminder,
        ...action.payload.reminder,
        updateTime: moment()
      }

    return reminder
  })

  return week
}

export default updatedMonth
