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
      loggedIn: true,
      signedIn: true,
      username: req.session.username
    };
    res.render('home', context)
;  },

  createCard: function(req, res) {
    var newCard = new Cards({
      username: req.body.username,
      deckName: req.body.deckName,
      question: req.body.question,
      answer: req.body.answer
    });
    res.redirect('/home');
  },
  editCard: function(req, res) {

  },
  quizLanding: function(req, res) {
    
  },
  startQuiz: function(req, res) {

  }

};
