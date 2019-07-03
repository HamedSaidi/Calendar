import moment from 'moment'
import guid from './uuid'

export default (state, action) => {
  const updatedMonth = state.month.map((week, index) => {
    if (action.payload.weekIndex === index) {
      const dayToUpdate = week.days[action.payload.weekdayIndex]
      dayToUpdate.reminders.push({
        text: '',
        date: moment(),
        category: 'home',
        open: true,
        newReminder: true,
        uuid: guid(),
        parentDayUuid: week.days[action.payload.weekdayIndex].uuid,
        grandparentUuid: week.uuid
      })
    }

    return week
  })

  return {
    ...state,
    month: updatedMonth
  }
}
