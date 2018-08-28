const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String },
  author: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

const itemSchema = new mongoose.Schema({

  category: { type: String, enum: ['Clothes', 'Bags', 'Shoes', 'Accessories'], required: 'This field is required' },
  gender: {type: String, enum: ['Female', 'Male', 'girls', 'boys'], required: 'This field is required' },
  itemCategory: String,
  itemDescription: { type: String, required: 'This field is required'},
  designerName: { type: String, required: 'This field is required'},
  size: { type: String, enum: ['XL', 'L', 'M', 'S', 'XS'], required: 'This field is required' },
  price: { type: String, required: 'This field is required'},
  rrp: Number,
  material: { type: String, required: 'This field is required'},
  condition: { type: String, enum: ['New with tags', 'New', 'Very good', 'Good', 'Satisfactory'], required: 'This field is required' },
  colour: { type: String, enum: ['Black', 'Beige/Nude', 'White', 'Blue', 'Animal Print', 'Floral', 'Green', 'Grey', 'Multi-Coloured/Stripes', 'Orange', 'Pink', 'Red', 'Purple', 'Tan/Brown', 'Yellow'], required: true },
  image: { type: String, required: 'This field is required'},
  shipping: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  salePitch: String,
  comments: [ commentSchema ]
});


itemSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Item', itemSchema);
