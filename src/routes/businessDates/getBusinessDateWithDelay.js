import moment from 'moment-business-days'
import holidays from './holidays'

moment.locale('us', {
  workingWeekdays: [1, 2, 3, 4, 5],
  holidays: holidays,
  holidayFormat: 'YYYY-MM-DD'
})

function isWeekendDay (aMoment) {
  return [0, 6].includes(aMoment.day())
}

function countWeekendAndHolidayDays (momentStart, momentEnd) {
  let weekendDays = 0
  let holidayDays = 0
  for (var aMoment = momentStart; aMoment.isBefore(momentEnd); aMoment.add(1, 'days')) {
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

module.exports = (req, res) => {
  const params = req.method === 'GET' ? req.query : req.body
  const businessDate = moment(params.initialDate).businessAdd(parseInt(params.delay))
  const { weekendDays, holidayDays } = countWeekendAndHolidayDays(moment(params.initialDate), businessDate)
  res.status(200).json({ ok: true,
    initialQuery: params,
    results: {
      businessDate: businessDate,
      totalDays: businessDate.diff(moment(params.initialDate), 'days'),
      holidayDays: holidayDays,
      weekendDays: weekendDays
    }
  })
}
