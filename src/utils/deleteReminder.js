export default (state, action) => {
  const updatedMonth = state.month.map((week, index) => {
    if (action.payload.weekIndex === index) {
      const dayToUpdate = week.days[action.payload.weekdayIndex]
      dayToUpdate.reminders = dayToUpdate.reminders.filter(reminder => reminder.uuid !== action.payload.reminder.uuid)
    }

    return week
  })

  return {
    ...state,
    month: updatedMonth
  }
}
