const mongoose = require('mongoose');

const subredditSchema = new mongoose.Schema({
  subreddit: String,
  scores: [Number],
});

const Subreddit = mongoose.model('Subreddit', subredditSchema);

module.exports = Subreddit;