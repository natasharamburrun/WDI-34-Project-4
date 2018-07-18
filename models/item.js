const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

const itemSchema = new mongoose.Schema({
  category: { type: String, required: true},
  itemCategory: String,
  itemDescription: String,
  designerName: { type: String, required: true},
  size: { type: String, required: true},
  price: { type: String, required: true},
  rrp: Number,
  material: String,
  condition: String,
  colour: String,
  image: { type: String, required: true},
  shipping: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  salePitch: String,
  comments: [ commentSchema ]
});


itemSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Item', itemSchema);
