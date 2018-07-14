const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

const itemSchema = new mongoose.Schema({
  itemCategory: {type: String, required: 'This field is required'},
  itemDescription: {type: String, required: 'This field is required'},
  designerName: {type: String, required: 'This field is required'},
  size: {type: String, required: 'This field is required'},
  price: {type: Number, required: 'This field is required'},
  rrp: Number,
  material: String,
  condition: {type: String, required: 'This field is required'},
  colour: String,
  image: {type: String, required: 'This field is required'},
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
});


itemSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('items', itemSchema);
