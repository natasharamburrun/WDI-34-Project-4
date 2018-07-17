const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

const itemSchema = new mongoose.Schema({
  category: String,
  itemCategory: String,
  itemDescription: String,
  designerName: String,
  size: String,
  price: String,
  rrp: Number,
  material: String,
  condition: String,
  colour: String,
  image: String,
  shipping: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  salePitch: String,
  comments: [ commentSchema ]
});


itemSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Item', itemSchema);
