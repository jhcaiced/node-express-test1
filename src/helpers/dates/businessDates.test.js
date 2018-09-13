import dates from './businessDates'

describe('Business Dates Operations', () => {
  it('Should test if a date is a business day', () => {
    expect(dates.isBusinessDay('2018-12-23')).toBe(false)
    expect(dates.isBusinessDay('2018-12-24')).toBe(true)
    expect(dates.isBusinessDay('2018-12-25')).toBe(false)
  })

  it('Should test if a date is a weekend day', () => {
    expect(dates.isWeekendDay('2018-12-23')).toBe(true)
    expect(dates.isWeekendDay('2018-12-24')).toBe(false)
  })

  it('Should add a number of days to a date and get the next business day', () => {
    expect(dates.addBusinessDays('2018-11-12', 3)).toBe('2018-11-15')
    expect(dates.addBusinessDays('2018-11-10', 3)).toBe('2018-11-15')
    expect(dates.addBusinessDays('2018-11-15', 3)).toBe('2018-11-20')
    expect(dates.addBusinessDays('2018-12-25', 20)).toBe('2019-01-24')
  })

  it('Should calculate the number of days between dates', () => {
    expect(dates.differenceInDays('2018-11-12', '2018-11-15')).toBe(3)
    expect(dates.differenceInDays('2018-11-10', '2018-11-15')).toBe(5)
    expect(dates.differenceInDays('2018-11-15', '2018-11-20')).toBe(5)
    expect(dates.differenceInDays('2018-12-25', '2019-01-24')).toBe(30)
  })
})
