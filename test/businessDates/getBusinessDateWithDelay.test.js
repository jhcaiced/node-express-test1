const config = require('../../src/config')
const request = require('supertest')(`${config.url}/api/v1/businessDates/`)

describe('Settlement Transfer Date Estimate', () => {
  it('Should calculate a Settlement Transfer Date Estimate', async () => {
    let response = await request.post('getBusinessDateWithDelay').send({
      initialDate: '2018-11-10T10:10:10Z',
      delay: 3
    }).expect(200)
    expect(response.header['content-type']).toBe('application/json; charset=utf-8')
    expect(response.text).toMatchSnapshot()
    response = await request.post('getBusinessDateWithDelay').send({
      initialDate: '2018-11-15T10:10:10Z',
      delay: 3
    })
    expect(response.text).toMatchSnapshot()
    response = await request.post('getBusinessDateWithDelay').send({
      initialDate: '2018-12-25T10:10:10Z',
      delay: 20
    })
    expect(response.text).toMatchSnapshot()
  })
})
