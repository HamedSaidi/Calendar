import moment from 'moment'

const getDayClass = (day, year) => {
  const today = moment()
  const classes = ['week__day']

  if (today.isSame(day, 'd')) {
    classes.push('week__day--today')
  }

  if (today > day && today.year() >= year) {
    classes.push('week__day--past')
  }

  if (day.day() === 0 || day.day() === 6) {
    classes.push('week__day--weekend')
  }

  return classes.join(' ')
}

export {getDayClass}
