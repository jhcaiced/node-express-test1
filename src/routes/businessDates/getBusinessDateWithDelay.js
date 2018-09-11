module.exports = (req, res) => {
  const params = req.method === 'GET' ? req.query : req.body
  res.status(200).json({ ok: true,
    initialQuery: params,
    results: {
      businessDate: params.initialDate,
      totalDays: 0,
      holidayDays: 0,
      weekendDays: 0
    }
  })
}
