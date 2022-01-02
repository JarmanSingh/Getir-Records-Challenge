const db = require('./db');
const config = require('../config');

describe('Mongo connection', () => {
  it('DB connection', async () => {
    await db.connect(config.mongo_url);
  });

  it('DB close connection', async () => {
    await db.close();
  });
});
