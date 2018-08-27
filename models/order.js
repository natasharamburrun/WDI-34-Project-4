const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderList: [{type: mongoose.Schema.ObjectId, ref: 'Item'}],
  deliveryBillingAddress: {type: String, required: 'Please enter delivery address'},
  deliveryPostCode: {type: String, require: 'Please enter post code'},
  deliveryBillingCity: {type: String, required: 'Please enter city'},
  token: String,
  amount: Number,
  currency: String,
  UserEmail: String
}, {
  timestamp: true
});

module.exports = orderSchema;
