const stripe = require('stripe')(process.env.STRIPE_API_KEY);
// const User = require('../models/user');

function createPayment(req, res, err) {
  console.log(req.body);
  stripe.charges.create({
    amount: req.body.amount,
    currency: 'GBP',
    description: req.body.description,
    source: req.body.token.id
  })
    // .then(() => User.findById(req.currentUser._id))
    .then(status => {
      res.json({ status });
    })
    .catch(err);

}

module.exports = {
  create: createPayment
};
