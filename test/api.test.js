/* eslint-disable max-len */
const request = require('supertest');
const app = require('../server');
describe('Testing post request getrecords', () => {
  it('Bad request, Invalid parameters startDate, endDate, minCount, maxCount', async () => {
    const res = await request(app).post('/getrecords')
      .send({
        'startDate': '',
      });
    expect(res.body.message).toEqual('Invalid startDate, endDate, minCount, maxCount');
    expect(res.body.records).toHaveLength(0);
  });
  it('Bad request, Invalid parameters endDate, minCount, maxCount', async () => {
    const res = await request(app).post('/getrecords')
      .send({
        'startDate': '2015-06-01',
      });
    expect(res.body.message).toEqual('Invalid endDate, minCount, maxCount');
    expect(res.body.records).toHaveLength(0);
  });
  it('Bad request, Invalid parameters minCount, maxCount', async () => {
    const res = await request(app).post('/getrecords')
      .send({
        'startDate': '2015-06-01',
        'endDate': '2015-06-02',
      });
    expect(res.body.message).toEqual('Invalid minCount, maxCount');
    expect(res.body.records).toHaveLength(0);
  });

  it('Bad request, Invalid parameters minCount, maxCount', async () => {
    const res = await request(app).post('/getrecords')
      .send({
        'startDate': '2015-06-01',
        'endDate': '2015-06-02',
        'minCount': 2000,
      });
    expect(res.body.message).toEqual('Invalid maxCount');
    expect(res.body.records).toHaveLength(0);
  });
});
