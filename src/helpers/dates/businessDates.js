import moment from 'moment-business-days'
import holidays from './holidays'

moment.locale('us', {
  workingWeekdays: [1, 2, 3, 4, 5],
  holidays: holidays,
  holidayFormat: 'YYYY-MM-DD'
})

function addBusinessDays (date, days) {
  return moment(date).businessAdd(parseInt(days)).format('YYYY-MM-DD')
}

function differenceInDays (dateStart, dateEnd) {
  return moment(dateEnd).diff(moment(dateStart), 'days')
}

function isBusinessDay (date) {
  return moment(date).isBusinessDay()
}

function isWeekendDay (date) {
  return [0, 6].includes(moment(date).day())
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
  isBusinessDay: isBusinessDay,
  isWeekendDay: isWeekendDay,
  addBusinessDays: addBusinessDays,
  differenceInDays: differenceInDays,
  countWeekendAndHolidayDays: countWeekendAndHolidayDays
}
