const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  cardNumber: {type: 'String'},
  expiry: {type: 'Number'},
  cvv: {type: 'Number'},
  zip: {type: 'Number'}
});

module.exports = mongoose.model('Payment', paymentSchema);
