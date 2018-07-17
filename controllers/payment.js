const stripe = require('stripe')(process.env.STRIPE_API_KEY);

function createPayment(req, res, err) {
  console.log(req.body);
  stripe.charges.create({
    amount: req.body.amount,
    currency: 'GBP',
    description: req.body.description,
    source: req.body.token.id
  })
    .then(status => {
      res.json({ status });
    })
    .catch(err);

}
module.exports = {
  create: createPayment
};
