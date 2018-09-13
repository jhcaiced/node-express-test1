import businessDates from '../../helpers/dates/businessDates'

module.exports = (req, res) => {
  const params = req.method === 'GET' ? req.query : req.body
  res.status(200).json({ ok: true,
    initialQuery: params,
    results: {
      isBusinessDate: businessDates.isBusinessDay(params.date)
    }
  })
}
