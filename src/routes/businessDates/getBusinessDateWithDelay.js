import businessDates from '../../helpers/dates/businessDates'

module.exports = (req, res) => {
  const params = req.method === 'GET' ? req.query : req.body
  const nextBusinessDate = businessDates.addBusinessDays(params.initialDate, params.delay)
  const { weekendDays, holidayDays } = businessDates.countWeekendAndHolidayDays(params.initialDate, nextBusinessDate)
  res.status(200).json({ ok: true,
    initialQuery: params,
    results: {
      businessDate: nextBusinessDate,
      totalDays: businessDates.totalDays(params.initialDate, nextBusinessDate),
      holidayDays: holidayDays,
      weekendDays: weekendDays
    }
  })
}
