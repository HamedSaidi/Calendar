import * as types from '../constants/action-types'

export const goToPrevMonth = () => ({
  type: types.GO_TO_PREV_MONTH
})

export const goToNextMonth = () => ({
  type: types.GO_TO_NEXT_MONTH
})

export const addReminder = (weekIndex, weekdayIndex) => ({
  type: types.ADD_REMINDER,
  payload: { weekIndex, weekdayIndex }
})

export const editReminder = (weekIndex, weekdayIndex, reminder) => ({
  type: types.EDIT_REMINDER,
  payload: { weekIndex, weekdayIndex, reminder }
})

export const deleteReminder = (weekIndex, weekdayIndex, reminder) => ({
  type: types.DELETE_REMINDER,
  payload: { weekIndex, weekdayIndex, reminder }
})
