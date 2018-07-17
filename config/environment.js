const dbURI = 'mongodb://localhost:27017/items';
const port= 4000;
const secret = 'a~dAQq4z{adkl.fqx';
const stripeKey = process.env.STRIPE_API_KEY;

module.exports = { dbURI, port, secret, stripeKey };
