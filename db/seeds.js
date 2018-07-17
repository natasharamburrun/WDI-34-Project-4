const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Item = require('../models/item');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {

  db.dropDatabase()
    .then(() => User.create([{
      username: 'Rachel',
      email: 'rachel@rachel.com',
      password: 'rachel',
      passwordConfirmation: 'rachel'
    }, {
      username: 'Linda',
      email: 'linda@linda.com',
      password: 'linda',
      passwordConfirmation: 'linda'
    }, {
      username: 'Bella',
      email: 'bella@bella.com',
      password: 'bella',
      passwordConfirmation: 'bella'
    } , {
      username: 'Bianca',
      email: 'bianca@bianca.com',
      password: 'bianca',
      passwordConfirmation: 'bianca'
    } , {
      username: 'Maria',
      email: 'maria@maria.com',
      password: 'maria',
      passwordConfirmation: 'maria'
    }, {
      username: 'Sam',
      email: 'sam@sam.com',
      password: 'sam',
      passwordConfirmation: 'sam'
    }, {
      username: 'James',
      email: 'james@james.com',
      password: 'james',
      passwordConfirmation: 'james'
    }, {
      username: 'Rich',
      email: 'rich@rich.com',
      password: 'rich',
      passwordConfirmation: 'rich'
    }]))
    .then(users => Item.create([{
      category: 'Clothes',
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
      category: 'Clothes',
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
      category: 'Clothes',
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
      category: 'Clothes',
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
    }, {
      category: 'Bags',
      itemCategory: 'Ladies Shoulder Bags',
      itemDescription: 'Chanel bag',
      designerName: 'Chanel',
      size: 's',
      price: 2499,
      rrp: 3500,
      condition: 'worn',
      material: 'Lambskin Leather',
      colour: 'black',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'This CHANEL Maxi Jumbo XL Flap Bag is in Very Good Pre-Owned Condition accompanied by Chanel Dust Bag, Box, Authenticity Card, Care Booklet. Circa 1997. Primarily made from Lambskin Leather complimented by Gold hardware.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/131/picture/131050_1.jpg?c=1516270097',
      user: users[3]
    }, {
      category: 'Bags',
      itemCategory: 'Jimmy Choo Rosalie Bag',
      itemDescription: 'Shoulder bag',
      designerName: 'Jimmy Choo',
      size: 'm',
      price: 330,
      rrp: 545,
      condition: 'Never Worn Without Tags',
      material: 'Leather',
      colour: 'Pink',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'Please note, these items are pre-owned and may show some signs of storage, even when unworn and unused. This is reflected within the significantly reduced price. Please refer to images and use the zoom function for more detail.',
      image: 'https://www.hardlyeverwornit.com/original_images/picture/148/148453_1.jpg?c=1531833975',
      user: users[0]
    }, {
      category: 'Bags',
      itemCategory: 'Dior Pink and White floral Saddle Bag',
      itemDescription: 'Shoulder bag',
      designerName: 'Dior',
      size: 's',
      price: 299,
      rrp: 400,
      condition: 'Worn A Few Times But Good Condition',
      material: 'Canvas/ Leather',
      colour: 'Pink',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'Conditions Details : See the photographs pen leak but outside still in good condition reflected in price',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144363_1.jpg?c=1531730072',
      user: users[0]
    }, {
      category: 'Shoes',
      itemCategory: 'Alexander Mcqueen Grey Suede Boots',
      itemDescription: 'Men Boots',
      designerName: 'Alexander Mcqueen',
      size: '9',
      price: 285,
      rrp: 565,
      condition: 'Hardly Ever Worn/Used',
      material: 'Suede',
      colour: 'Grey/brown',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'The boots are laced up, with a contrasting light grey sole. The shoes have hardly ever been worn however there are small scratches on the back of the shoes.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/134/picture/134086_1.jpg?c=1531392690',
      user: users[0]
    }]))
    .then(items => console.log(`${items.length} items created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
