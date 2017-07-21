
const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  username: String,
  deckName: String,
  cards:[{
    question: String,
    answer: {
      type: String,
      correct: {
        default: true
      }
    }
  }] 
});

const Cards = mongoose.model('Cards', cardsSchema);

module.exports = Cards;
