var Cards = require('../models/cards');


// var reply = {
//     message: req.body.reply,
//     userFrom: req.user._id
// };
//
// Message.findOneAndUpdate(
//     req.params.id,
//     { $push: { replies: reply } },
//     { upsert: true }, // upsert looks to find a Message with that id and if it doesn't exist creates the Message
//     function(err, data) {
//         // Handle err
// });

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
    res.redirect('/createCard');
  },
  editCard: function(req, res) {
    var context = {
      signedIn: true,
      // loggedIn: true,
      username: req.session.username,
    };
    Cards.find({}).then(function(cards){
      context.model = cards;
      // console.log("HERE", snippets);
      res.render('home', context);
    });
  },
  quizLanding: function(req, res) {
    var context = {
      signedIn: true,
      username: req.session.username,
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
    Cards.find({_id: req.body.id}).then(function(card) {
      context.model = card;
      res.render('quiz', context);
    });
  }

};
