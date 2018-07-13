/* global describe, it, expect, api, beforeEach*/

const User = require('../../../models/user');

const userInfo = {
  username: 'test',
  email: 'test',
  password: 'test',
  passwordConfirmation: 'test'
};

describe('POST /register', () =>  {

  beforeEach(done => {
    User.remove({})
      .then(() => {
        done();
      });
  });
  it('should return a 201 response', done => {
    api.post('/api/register')
      .send(userInfo)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });
  it('should return an object', done => {
    api.post('/api/register')
      .send(userInfo)
      .end((err, res) => {
        expect(res.body).to.be.an('Object');
        done();
      });
  });
});
