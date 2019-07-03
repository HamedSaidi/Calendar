import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

class ReminderForm extends React.Component {
  categories = ['home', 'work', 'calendar']
  constructor (props) {
    super(props)

    this.state = {
      text: this.props.text,
      category: this.props.category,
      startTime: this.props.startTime,
      endTime: this.props.endTime
    }

    this.toggleIsActive = this.toggleIsActive.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this)
  }

  toggleIsActive () {
    this.setState({ active: !this.state.active })
  }

  handleSubmit(event) {
    event.preventDefault()

    const { category } = this.state;

    const updatedReminder = {
      category,
      updateTime: moment(),
      newReminder: false,
      open: false
    }

    this.setState({ editing: false })
    this.props.onSave(updatedReminder)
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleStartTimeChange(e) {
    if (e.target.value < moment().format('HH:mm')) {
      return;
    }

    const [hour, minute] = e.target.value.split(':')
    const updatedStartDate = this.props.date.set({
      hour,
      minute
    })

    this.setState({
      startTime: e.target.value,
      date: updatedStartDate,
      endTime: `${parseInt(hour, 10) + 1}:${minute}`
    })
  }

  handleEndTimeChange(e) {
    if (e.target.value < moment().format('HH:mm')) {
      return;
    }

    let timeArray = e.target.value.split(':')
    const hours = timeArray[0];
    const minutes = timeArray[1];

    const updatedEndDate = this.props.date.set({
      'hour': hours,
      'minute': minutes
    })

    this.setState({
      date: updatedEndDate,
      endTime: `${parseInt(hours, 10) - 1}:${minutes}`
    })
  }

  render () {
    if (this.props.editing === false) {
      return null;
    }

    return (
      <form className="reminder" onSubmit={this.handleSubmit}>
        <input
          key={'text'}
          type="type"
          maxLength="30"
          placeholder={this.props.placeholder}
          autoFocus
          value={this.props.text}
          onChange={this.props.onChange}
        />
        <select
          onChange={this.props.onCategoryChange}
          value={this.props.category}
          className="capitalize"
        >
          {this.categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>

        <input
          type="time"
          key="startTime"
          value={this.state.startTime}
          onChange={this.handleStartTimeChange}
        />

        <input
          type="time"
          key="endTime"
          value={this.state.endTime}
          onChange={this.handleEndTimeChange}
        />

        <button key="button" type="button" onClick={this.props.onDelete}>X</button>
        <button key="submit" type="submit">Save</button>
      </form>
    )
  }
}

ReminderForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  category: PropTypes.string,
  editing: PropTypes.bool
}

ReminderForm.defaultProps = {
  text: '',
  placeholder: 'New reminder...',
  category: 'home',
  startTime: `${moment().format('HH')}:${moment().minutes()}`,
  endTime: `${moment().add(1, 'hours').format('HH')}:${moment().minutes()}`
}

export default ReminderForm
