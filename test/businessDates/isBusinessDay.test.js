const config = require('../../src/config')
const routePrefixes = require('../../src/api/constants')
const request = require('supertest')(`${config.url}/${routePrefixes.BUSINESS_DATES_PREFIX}`)

describe('Is Business Day', () => {
  it('Determine if a given date is a business day', async () => {
    let response = await request.post('/isBusinessDay').send({
      date: '2018-11-12'
    }).expect(200)
    expect(response.header['content-type']).toBe('application/json; charset=utf-8')
    expect(response.text).toMatchSnapshot()
    response = await request.post('/isBusinessDay').send({
      date: '2018-11-11'
    })
    expect(response.text).toMatchSnapshot()
    response = await request.post('/isBusinessDay').send({
      date: '2018-11-13'
    })
    expect(response.text).toMatchSnapshot()
  })
})
