var Cards = require('../models/cards');


module.exports = {
  //show different decks
  landing: function(req, res) {

  },
  homePage: function(req, res) {

    var context = {
      // loggedIn: true,
      signedIn: true,
      username: req.session.username
    };
    res.render('home', context);
  },
  createCardLanding: function(req, res) {
    var context = {
      // loggedIn: true,
      signedIn: true,
      username: req.session.username
    };
    res.render('createCard',context);
  },
  createCard: function(req, res) {
    var context = {
      // loggedIn: true,
      signedIn: true,
      username: req.session.username
    };
    var newCard = new Cards({
      username: req.body.username,
      deckName: req.body.deckName,
      question: req.body.question,
      answer: req.body.answer
    });
    newCard.save();
    res.redirect('/createCard');
  },
  editCard: function(req, res) {
    var context = {
      signedIn: true,
      // loggedIn: true,
      username: req.session.username,
    };
    Cards.updateOne({_id: req.params.id},
  {activity: req.body.activity}).then(function(newActivity){
    res.render('home', context);
  });
  },

  deleteCard: function (req, res) {
    var context = {
      signedIn: true,
      // loggedIn: true,
      username: req.session.username,
    };
    Cards.deleteOne({_id: req.params.id}).then(function(){
      res.render();
    });
  },
  quizLanding: function(req, res) {
    var context = {
      signedIn: true,
      username: req.session.username,
      numCorrect: req.session.numCorrect,
      numIncorrect: req.session.numIncorrect,
      correct: req.session.correct

    };
    Cards.find({}).then(function(cards) {
      context.model = cards;
      // console.log("HERE", snippets);
      res.render('quiz', context);
    });
  },
  startQuiz: function(req, res) {
    var context = {
      signedIn: true,
      username: req.session.username,
      startQuiz: true
    };
    req.session.card = req.params.id;

    Cards.find({_id: req.session.card}).then(function(card) {
      console.log("CARD", card);
      context.model = card;
      req.session.answer = card[0].answer;

      res.render('quiz', context);
    });
  },
  questionAnswered: function(req, res) {
    var context = {
      signedIn: true,
      username: req.session.username,
      startQuiz: true,
      numCorrect: req.session.numCorrect,
      numIncorrect: req.session.numIncorrect,
      correct: req.session.correct

    };
    if (req.body.answer === req.session.answer){
      req.session.correct = true;
      req.session.numCorrect++;
      res.redirect('/quiz');

    } else {
      req.session.correct = false;
      req.session.numIncorrect++;
      res.redirect('/answer');

  }

}

};
