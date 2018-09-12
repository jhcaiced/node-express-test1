import moment from 'moment-business-days'
import holidays from './holidays'

moment.locale('us', {
  workingWeekdays: [1, 2, 3, 4, 5],
  holidays: holidays,
  holidayFormat: 'YYYY-MM-DD'
})

function addBusinessDays (date, days) {
  return moment(date).businessAdd(parseInt(days))
}

function differenceInDays (dateStart, dateEnd) {
  return moment(dateEnd).diff(moment(dateStart), 'days')
}

function isWeekendDay (aMoment) {
  return [0, 6].includes(aMoment.day())
}

function countWeekendAndHolidayDays (dateStart, dateEnd) {
  let weekendDays = 0
  let holidayDays = 0
  for (var aMoment = moment(dateStart); aMoment.isBefore(moment(dateEnd)); aMoment.add(1, 'days')) {
    if (aMoment.isBusinessDay()) {
      continue
    }
    if (isWeekendDay(aMoment)) {
      weekendDays++
      continue
    }
    holidayDays++
  }
  return {
    weekendDays: weekendDays,
    holidayDays: holidayDays
  }
}

module.exports = {
  isWeekendDay: isWeekendDay,
  addBusinessDays: addBusinessDays,
  differenceInDays: differenceInDays,
  countWeekendAndHolidayDays: countWeekendAndHolidayDays
}
