import goToMonth from './goToMonth'

export default (state, action) => goToMonth(state, action, state.currentMonthIndex + 1)
