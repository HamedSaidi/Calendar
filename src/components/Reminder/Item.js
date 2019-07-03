import React from 'react'
import PropTypes from 'prop-types'

import ReminderForm from './Form'
import ReminderLabel from './Label'

class ReminderItem extends React.PureComponent {
  constructor (props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)
    this.state = {
      editing: this.props.reminder.newReminder,
      active: false,
      category: this.props.reminder.category,
      text: this.props.reminder.text
    }
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (formFields) => {
    const updatedReminder = {
      ...this.props.reminder,
      ...formFields,
      text: this.state.text,
      category: this.state.category
    }

    this.props.editReminder(this.props.weekIndex, this.props.weekdayIndex, updatedReminder);
    this.setState({ editing: false })
  }

  handleCategoryChange = event => {
    this.setState({ category: event.target.value })
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleClick = () => {
    this.setState({ active: !this.state.active, editing: true })
  }

  deleteReminder = () => {
    this.props.deleteReminder(this.props.weekIndex, this.props.weekdayIndex, this.props.reminder)
  }

  render () {
    return (
      <div className="reminder">
        <ReminderLabel
          text={this.state.text}
          category={this.state.category}
          handleClick={this.handleClick}
        />
        <ReminderForm
          text={this.state.text}
          category={this.state.category}
          date={this.props.reminder.date}
          startTime={this.props.reminder.startTime}
          endTime={this.props.reminder.endTime}
          editing={this.state.editing}
          onChange={this.handleChange}
          onCategoryChange={this.handleCategoryChange}
          onSave={this.handleSave}
          onDelete={this.deleteReminder}
        />
      </div>
    )
  }
}

ReminderItem.propTypes = {
  disabled: PropTypes.bool
}

ReminderItem.defaultProps = {
  text: 'New Reminder'
}

export default ReminderItem
