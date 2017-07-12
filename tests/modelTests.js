
const createUser = require('../app').createUser;


const expect = require('chai').expect;



describe('use model tests', function(){

  it('can generate a password hash from a string', function(done) {
    const passwordObj = createPasswordHashObj('password');
      expect(passwordObj).to.not.equal(null);
    const expectedHashObj = {salt: 'asdf', iterations: 100, hash: hashString};
  });

  it('can create a user in mongo', function(done){
    createUser('username', 'password').then(function(user){
      expect(user.username).to.equal('username');
      expect(user.password).to.be.an('object');
      expect(user.password.hash.length).to.equal(512);
      // expect(passwordObj).to.deep.equal(expectedHashObj);
    });
    done();
  });
});


describe('sanity test', function(){
  it('should run test', function(){
      expect(1).to.not.equal(2);
  });

});
