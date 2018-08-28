const User = require('../models/user');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

function orderCreateRoute(req, res, next) {
  console.log(req.body);
  stripe.charges.create({
    amount: req.body.amount,
    currency: 'GBP',
    description: req.body.description,
    source: req.body.token.id
  })
    .then(user => {
      console.log('payment successful');
      res.status(200).json(user);
    })
    .catch(next); //cathes errors of all promises, will got to global error catcher
}

function orderShowRoute(req, res, next){
  return User.findById(req.currentUser._id)
    .populate('orders.orderList')
    .then(user => user.orders.id(req.params.id))
    .then(user => res.json(user.orders))
    .catch(next);
}

function orderIndexRoute(req, res, next){
  return User.findById(req.currentUser._id)
    .then(user => res.json(user.orders))
    .catch(next);
}

module.exports = {
  orderCreate: orderCreateRoute,
  orderShow: orderShowRoute,
  orderIndex: orderIndexRoute
};
