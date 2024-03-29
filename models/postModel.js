const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post must have a title'],
    unique: true
  },
  body: {
    type: String,
    required: [true, 'Post must have a content']
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
