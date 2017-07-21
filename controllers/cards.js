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
  createCard: function(req, res) {

  },
  startQuiz: function(req, res) {

  }

};
