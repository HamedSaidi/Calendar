import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CalendarActions from '../actions'

import moment from 'moment'

import CalendarNav from '../components/Calendar/Nav'

class CalendarNavContainer extends Component {
  render () {
    const { currentMonthIndex, actions } = this.props
    const currentMonthTitle = moment().startOf('month').add(currentMonthIndex, 'month').format('MMMM YYYY')

    return (
      <CalendarNav
        nextMonthAction={actions.goToNextMonth}
        prevMonthAction={actions.goToPrevMonth}
        currentMonthTitle={currentMonthTitle}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentMonthIndex: state.calendar.currentMonthIndex
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CalendarActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarNavContainer)
