const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/items';
const port= process.env.PORT || 4000;
const secret = 'a~dAQq4z{adkl.fqx';
const stripeKey = process.env.STRIPE_API_KEY;

module.exports = { dbURI, port, secret, stripeKey };
