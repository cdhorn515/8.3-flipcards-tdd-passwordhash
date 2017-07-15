const User = require('../models/user');
const createUser = require('../app').createUser;
const createPasswordHashObj = require('../app').createPasswordHashObj;
// const hashString = require('../app').hashString;

const expect = require('chai').expect;



describe('use model tests', function(){

  it('can generate a password hash from a string', function(done) {
    const passwordObj = createPasswordHashObj('password');
    const expectedHashObj = {salt: 'asdf', iterations: 100, hash: "hPzzhHUWenNASgMt0ddX+4FtAg6+yDQ4n5ZPUxUqVrigmoCd0nafGqGISjhqoRuucPMQOhGhJkjJh80Z5bY73Ph+wgL+l8qwvo6snlpqZqvG9Q3rkFviV7tWSbQzd1Ub5mO5ZHhhvL11d2W8odJAqpg2E/NVtKqK9bn0znIQHEQh6uRbemhlj8UQQ7TF9mFZmdYKmC1BSbLBjzkm95sLs5k7jqpyOlscDMOKnLOEbDpDeQi89hIAaEjQ0porRiuKCNTGLHgc8PGD+hY4lmmI2MVucwnYin0aU53cuibmEKEQx056WfHyRmQMEIljOA+lioZ2lYYVO/cDUJbMUxFGUKnAdlKAxpjwBEK4CLTw67AkuFbNJSeDG1kOtU9I7xoaiVzoRMHRc4lwBnAffJSR4bWzOeDHEnLtGcvXlwIwbm+L0IN7GqZOFwhcN14KHs0yYkclO8alJ0VVkiACZvGmeI46LMoWv4b61EUgn55W2RFartJNi7cshArRfLJMqkNoAxwXe4/ElRvuk+nYtqwQyuwDC0FEAVXUntmMgnoppRqUGB++4PWdYQJtT39RoXZ3UrlA+oCrIrlpo/UPEoNBvhpmdIRK4eE6bXKvrn6PVKHhGM1GcBG3tKSdKj1x+2CgmkiUecIuJ3FKSsUPB2hXeW/i1ajzPSKkMYsM3PPGlxI="};
    expect(passwordObj).to.not.equal(null);

    done();
  });

  it('can create a user in mongo', function(done){
    createUser('username', 'password').then(function(user){
      expect(user.username).to.equal('username');
      expect(user.password).to.be.an('object');
      expect(user.password.hash.length).to.equal(684);
          done();
      // expect(passwordObj).to.deep.equal(expectedHashObj);
    });

  });
});


describe('sanity test', function(){
  it('should run test', function(){
      expect(1).to.not.equal(2);
  });

});
