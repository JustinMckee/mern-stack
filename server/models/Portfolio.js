// models/Book.js

const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  client: {
    type: String
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }

});

module.exports = Portfolio = mongoose.model('portfolio', PortfolioSchema);
