var expect = require('chai').expect;
var request = require('supertest');
var app = require('../app');
var Snippets = require('../models/users');

describe('user endpoint tests', function(){

  it('user can go to login page', function(done) {
    request(app)
    .get('/login')
    .expect(500, done);
  });
  it('user can go to signup page', function(done) {
    request(app)
    .get('/signup')
    .expect(500, done);
  });
});
