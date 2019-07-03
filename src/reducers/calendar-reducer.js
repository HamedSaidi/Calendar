import moment from 'moment'
import updatedMonth from '../utils/editReminder'
import goToPrevMonth from '../utils/goToPrevMonth'
import goToNextMonth from '../utils/goToNextMonth'
import createMonth from '../utils/createMonth'
import addReminder from '../utils/addReminder'
import deleteReminder from '../utils/deleteReminder'

// Gets the current month start week index based on 52 weeks in a year
const initialStartWeek = moment().startOf('month').add(0, 'month').week()
// Gets the current month end week index based on 52 weeks in a year
const initialEndWeek = moment().endOf('month').add(0, 'month').week()
const currentMonth = createMonth(initialStartWeek, initialEndWeek, moment().year())

// Initial State
const initialState = {
  currentMonthIndex: 0,
  month: currentMonth,
  year: { 0: currentMonth }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO_TO_PREV_MONTH':
      return goToPrevMonth(state, action)

    case 'GO_TO_NEXT_MONTH':
      return goToNextMonth(state, action)

    case 'ADD_REMINDER':
      return addReminder(state, action)

    case 'DELETE_REMINDER':
      return deleteReminder(state, action)

    case 'EDIT_REMINDER':
      return updatedMonth(state, action)

    default:
      return state
  }
}
