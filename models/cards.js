
const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  username: String,
  cards: [{
    question: String,
    answer: {
      type: String,
      default: false
    }
  }]
});

const Cards = mongoose.model('Cards', cardsSchema);

module.exports = Cards;
