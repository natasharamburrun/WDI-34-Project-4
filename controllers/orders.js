
const User = require('../models/user');

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
  // orderCreateRoute: orderCreateRoute,
  orderShow: orderShowRoute,
  orderIndex: orderIndexRoute
};
