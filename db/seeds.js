const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Item = require('../models/item');

mongoose.connect(dbURI, (err, db) => {

  db.dropDatabase()
    .then(() => Item.create([{
      itemCategory: 'Dress',
      itemDescription: 'Balenciaga graphic print dress',
      designerName: 'BALENCIAGA',
      size: 's',
      price: '£195',
      rrp: '£680',
      condition: 'Hardly Ever Worn/Used',
      material: 'Wool/Cotton Mix',
      colour: 'Multi-Coloured / Stripe',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144795_1.jpg?c=1528467935'
    }, {
      itemCategory: 'Dress',
      itemDescription: 'DOLCE & GABBANA Floral Print Dress',
      designerName: 'DOLCE & GABBANA',
      size: 's',
      price: '£309',
      rrp: '£755',
      condition: 'Hardly Ever Worn/Used',
      material: 'Silk',
      colour: 'Multi-Coloured / Stripe',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144040_1.jpg?c=1527840269'
    }, {
      itemCategory: 'Dress',
      itemDescription: 'Bottega Veneta Red fit & flare Dress',
      designerName: 'BOTTEGA VENETA',
      size: 'm',
      price: '£120',
      rrp: '£1225',
      condition: 'Hardly Ever Worn/Used',
      material: '100% Wool',
      colour: 'Red',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/119/picture/119820_1.jpg?c=1529852233'
    }, {
      itemCategory: 'Dress',
      itemDescription: 'Ralph Lauren red dress',
      designerName: 'RALPH LAUREN',
      size: 'm',
      price: '£500',
      rrp: '£2000',
      condition: 'Never Worn Without Tags',
      material: 'Silk Stretch Knit',
      colour: 'Red',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/137/picture/137532_1.jpg?c=1527010690'
    }]))
    .then(items => console.log(`${items.length} items created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
