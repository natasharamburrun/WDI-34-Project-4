const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemCategory: {type: String, required: 'This field is required'},
  itemDescription: {type: String, required: 'This field is required'},
  designerName: {type: String, required: 'This field is required'},
  size: {type: String, required: 'This field is required'},
  price: {type: String, required: 'This field is required'},
  rrp: [ String ],
  material: [ String ],
  condition: {type: String, required: 'This field is required'},
  colour: [ String ],
  image: {type: String, required: 'This field is required'}
});

module.exports = mongoose.model('items', itemSchema);
