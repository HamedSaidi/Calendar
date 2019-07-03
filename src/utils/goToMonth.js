import moment from 'moment'
import createMonth from './createMonth'

export default (state, action, distination) => {
  const updatedStartWeek = moment().startOf('month').add(distination, 'month').week()
  const updatedEndWeek = moment().endOf('month').add(distination, 'month').week()
  let year = moment().startOf('month').add(state.currentMonthIndex + distination, 'month').format('YYYY')
  year = parseInt(year, 10)
  const updatedYearCalendar = {
    ...state.year,
    [state.currentMonthIndex]: state.month,  // Save the current month
    [distination]: state.year[distination] ?  state.year[distination] : createMonth(updatedStartWeek, updatedEndWeek, year)
  }

  return {
    ...state,
    currentMonthIndex: distination,
    currentYear: parseInt(year, 10),
    month: updatedYearCalendar[distination],
    year: updatedYearCalendar
  }
}
