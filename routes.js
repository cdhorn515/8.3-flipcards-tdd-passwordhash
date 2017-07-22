
var userController = require('./controllers/users');
var cardController = require('./controllers/cards');

module.exports = function(app){
  app.get('/', userController.landing);

  app.get('/signup', userController.signupLanding);
  app.post('/signup', userController.userSignup);

  app.get('/login', userController.loginLanding);
  app.post('/login', userController.loginUser);

  app.get('/createCard', cardController.createCardLanding);
  app.post('/createCard', cardController.createCard);

  app.get('/quiz', cardController.quizLanding);
  app.post('/quiz', cardController.startQuiz);

  app.get('/home', cardController.homePage);
};
