'use strict';

const mock = require('egg-mock');

describe('test/nedb.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nedb-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nedb')
      .expect(200);
  });
});
