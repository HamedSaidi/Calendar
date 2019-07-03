import moment from 'moment'
import guid from './uuid'

/**
 * createCalendarMonth
 * createCalendarMonth creates a new calender month
 * from the first week to the last in that month
 *
 */
const createMonth = (startWeek, endWeek, year) => {
  const monthArray = []
  // TODO: Fix this as it doesnt work for december
  // For August this would start on weekIndex = 31 and go to the endWeek = 35 (4)
  for (
    let weekIndex = startWeek, weekArrayIndex = 0;
    weekIndex < endWeek + 1 || (endWeek === 1 && weekIndex < 54);
    weekIndex++, weekArrayIndex++
  ) {
    const weekUuid = guid()

    // Push a week object into the monthArray
    monthArray.push({
      uuid: weekUuid,
      year,
      weekIndex,
      index: weekArrayIndex,
      days:
        Array(7)
        .fill({ id: 0 }) // Fill the array with 7 blank days
        .map((item, index) => {
          return {
            uuid: guid(),
            parentWeekUuid: weekUuid, // Keep a track of the partent
            date: moment() // Get todays date
              .week(weekIndex) // Get or sets the week of the year
              .startOf('week') // set to the first day of this week, 12:00 am
              .clone() // Create a clone of a duration. Durations are mutable - This will clone Sunday date
              .add(index, 'day'), // Add certain amount/index days to the start of the week which will be a sunday
            weekIndex,
            index: index,
            reminders: [] // Create blank reminders within the day
          }
        })
    })
  }
  return monthArray
}

export default createMonth
