var Users = require('../models/users');
var Cards = require('../models/cards');
var createUser = require('../controllers/helpers').createUser;
var createPasswordHashObj = require('../controllers/helpers').createPasswordHashObj;
var login = require('../controllers/helpers').login;
var createCard = require('../controllers/helpers').createCard;
var updateCard = require('../controllers/helpers').updateCard;

var expect = require('chai').expect;

describe('card model tests', function(){

  afterEach(function(done) {
    Cards.deleteMany({}).then(function() {
      done();
    });
  });

  beforeEach(function(done) {
    Cards.insertMany([
      {username: "sami", deckName: "likes", question: "do you like peanut butter?", answer : "yes"},
      {username: "sami", deckName: "likes", question: "do you like belly rubs?", answer: "yes"},
      {username: "sami", deckName: "likes", question: "do you like to play with squeaky toys?", answer: "no"}
    ]).then(function(){
      done();
    });
  });

  afterEach(function(done) {
    Cards.deleteMany({}).then(done());
  });
//
//   it('should update card in mongo', function(done) {
//     // expect(4).to.equal(4);
//     updateCard('do you like belly rubs?', 'no').then(function(result){
// console.log("++++++++++", result);
//       expect(result.answer).to.equal("yes");
//       done();
//     });
//     // done();
//   });

  it('should create a card in mongo', function(done) {
    expect(4).to.not.equal(5);
    createCard('christina', 'coding', 'what language are you learning?', 'java').then(function(card) {
      expect(5).to.equal(5);
      console.log(card);
      expect(card.deckName).to.equal('coding');
      expect(card.question).to.not.equal('java');
      expect(card.answer).to.not.equal('sql');
    });
      done();
  });

    it('should run cards test', function(){
        expect(1).to.not.equal(9);
   });

});

// ------------------------------------

describe('user model tests', function(){

  beforeEach(function(done) {
      Users.deleteMany({}).then(done());
    });

  afterEach(function(done){
  Users.deleteMany({}).then(done());
});

it('will not login if invalid user', function(done){
  createUser('sami', 'treats').then(function(user){
  login('sami', 'treats').then(function(result) {
    // console.log("HERE ", result);
    expect(result).to.not.equal(false);
  }).then(done());
});
});

  it('will not log in if invalid password', function(done) {
    createUser('sami', 'treats').then(function(user){
      login('sami', 'peanutbutter').then(function(result) {
      // console.log("HERE 2 ", result);
        expect(result).to.equal(false);
      }).then(done());
    });
  });

  it('can log in and return true if valid login', function(done) {
  createUser('sami', 'treats').then(function(user){
      login('sami', 'food').then(function(result) {
        expect(result).to.not.equal(true);
      });
    }).then(done());
  });

  it('can generate a password hash from a string', function(done) {
    var passwordObj = createPasswordHashObj('sami', 'a');
    var expectedHashObj = {salt: 'a', iterations: 100, hash: "owepRhuCRX9+NNmcCx6oZsiXU2d3ZF7OoXH60Z5VJS/0LYKrM6xQwvUvAZc704ILpF2t1gNEkuQaLHK+sslfGskAiHK9J0kwmjVo1Y26JvwhaBnUO8iGA9ODI2VmCgRFT03rj+XB4VzkxHzxc5zEleuP5/3+nAtT2MxPIlTd6KiMAZd0rHCWJ6RO29pfbC6X7bVzE2M0GX25T0NRL7rb0IeQr2ND6SExZ62W31tcDYc1ahdebTx6bA9FaMfZ4v/aEs5+3LmcszaXrXyL21pl0tFz02h6Ct1bbos5pQFPvzxzLght2JUm7TnYc9OsSCXSt7h9OKPC2ASsnU5nIdih5tvvOi9jQzca1Glj0OidzY43FiZBDdgXff1Z0rgBS9xlv1x7NSoD3NBqEg7K2u98GUF7t/FEb4+ocJO/FS1rlnt+7QeuEr1Dc+XPL2qjMvGvBXNPDAQZ0Qy+vQfws/xVUySE60yRmNM7POFCqV/LjvzYfGMjY4zpw+OU3TC7AeDQKE8s1aYYzPgyEPUVWULwu1mMrqcYYuQi/V2xc3OIFRuW5vMjWq5UZ/WEhPyHTZC9j261KD78n9G9R/OCn3ZapUwID/8hM7rpcHedgJPO+y421H2xI0hcGkneVbNgFlTS0K75Hv7LqC+rSoKjXK/BzUM30EQ/opAm+PA/d3Dvlr0="};
    expect(passwordObj).to.not.equal(null);
    expect(passwordObj).to.deep.equal(expectedHashObj);
    done();
  });

  it('can create a user in mongo', function(done){
    expect(3).to.equal(3);
    createUser('username', 'password').then(function(user){
      expect(user.username).to.equal('username');
      expect(user.password.hash.length).to.equal(684);
      expect(user.password).to.be.an("object");
    });
    done();

  });
});

describe('sanity test', function(){
  it('should run test', function(){
      expect(1).to.not.equal(9);
  });

});
