import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Week from './Week'

class CalendarMonth extends React.PureComponent {
  constructor (props) {
    super(props)

    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.renderWeeks = this.renderWeeks.bind(this)
  }

  handleDoubleClick (weekIndex, weekdayIndex, weekdayDate) {
    if (moment() < weekdayDate)
      this.props.actions.addReminder(weekIndex, weekdayIndex)
  }

  renderWeeks (week, index) {
    const { month, actions } = this.props

    return month.map((week, index) => (<Week week={week} key={week.uuid} index={index} actions={actions} handleDoubleClick={this.handleDoubleClick} />))
  }

  render () {
    return (
      <div className='calendar__month'>
        {this.renderWeeks()}
      </div>
    )
  }
}

CalendarMonth.propTypes = {
  disabled: PropTypes.bool
}

export default CalendarMonth
