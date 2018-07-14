const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Item = require('../models/item');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {

  db.dropDatabase()
    .then(() => User.create([{
      username: 'maria',
      email: 'maria@maria.com',
      password: 'maria',
      passwordConfirmation: 'maria'
    }, {
      username: 'sam',
      email: 'sam@sam.com',
      password: 'sam',
      passwordConfirmation: 'sam'
    }, {
      username: 'jim',
      email: 'jim@jim.com',
      password: 'jim',
      passwordConfirmation: 'jim'
    }, {
      username: 'louise',
      email: 'louise@louise.com',
      password: 'louise',
      passwordConfirmation: 'louise'
    }]))
    .then(users => Item.create([{
      itemCategory: 'Dress',
      itemDescription: 'Balenciaga graphic print dress',
      designerName: 'BALENCIAGA',
      size: 's',
      price: 195,
      rrp: 680,
      condition: 'Hardly Ever Worn/Used',
      material: 'Wool/Cotton Mix',
      colour: 'Multi-Coloured / Stripe',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'BLACK WITH VIBRANT PRINT, PULLED AT WAIST, V NECKLINE ZIPS AT BACK, HALF LINED',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144795_1.jpg?c=1528467935',
      user: users[0]
    }, {
      itemCategory: 'Dress',
      itemDescription: 'DOLCE & GABBANA Floral Print Dress',
      designerName: 'DOLCE & GABBANA',
      size: 's',
      price: 309,
      rrp: 755,
      condition: 'Hardly Ever Worn/Used',
      material: 'Silk',
      colour: 'Multi-Coloured / Stripe',
      shipping: 'Hermes £2.79',
      salePitch: 'Bottega Veneta brick red fit & flare dress with capped sleeves, round neckline and side zipper closure. Pleated at back for fit with a textured hem.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144040_1.jpg?c=1527840269',
      user: users[1]
    }, {
      itemCategory: 'Dress',
      itemDescription: 'Bottega Veneta Red fit & flare Dress',
      designerName: 'BOTTEGA VENETA',
      size: 'm',
      price: 120,
      rrp: 1225,
      condition: 'Hardly Ever Worn/Used',
      material: '100% Wool',
      colour: 'Red',
      shipping: 'Royal Mail Standard 2nd Class £2.95',
      salePitch: 'Good condition with a small faded mark below the waist on the right side. This can be seen with the zoom in in picture 2. The mark is hard to see due to the colour of the fabric. 8.5/10.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/119/picture/119820_1.jpg?c=1529852233',
      user: users[2]
    }, {
      itemCategory: 'Dress',
      itemDescription: 'Ralph Lauren red dress',
      designerName: 'RALPH LAUREN',
      size: 'm',
      price: 500,
      rrp: 2000,
      condition: 'Never Worn Without Tags',
      material: 'Silk Stretch Knit',
      colour: 'Red',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'beautiful dress, stretches to fit to give a great silhouette. Side zip to give snug fit for a flirty summer dress.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/137/picture/137532_1.jpg?c=1527010690',
      user: users[3]
    }]))
    .then(items => console.log(`${items.length} items created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
