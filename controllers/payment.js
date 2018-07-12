const stripe = require('stripe')('sk_test_idhzataEoF9qpiHgK7aeTV2K');
// const stripe = require('stripe');

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
