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
      passwordConfirmation: 'rachel',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl'
    }, {
      username: 'Linda',
      email: 'linda@linda.com',
      password: 'linda',
      passwordConfirmation: 'linda',
      image: 'https://cdn.networkrail.co.uk/wp-content/uploads/2016/12/Adriana-300x300.jpg'
    }, {
      username: 'Bella',
      email: 'bella@bella.com',
      password: 'bella',
      passwordConfirmation: 'bella',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqV3TnL8ahWi0RDLiy2wmithYyl5nbAauhVuel_8HxyllPXZ3P'
    } , {
      username: 'Ami',
      email: 'ami@ami.com',
      password: 'ami',
      passwordConfirmation: 'ami',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLgVb7nWpH_3AtJg7I6jcG1b2EOWewYT2p0c6E095VV0ONWmo'
    } , {
      username: 'Maria',
      email: 'maria@maria.com',
      password: 'maria',
      passwordConfirmation: 'maria',
      image: 'https://i2.wp.com/www.brandalley.co.uk/blog/wp-content/uploads/2015/06/Elisabeth-Hoff-black-and-white-profile.jpg?ssl=1'
    }, {
      username: 'Sam',
      email: 'sam@sam.com',
      password: 'sam',
      passwordConfirmation: 'sam',
      image: 'https://pbs.twimg.com/profile_images/378800000063728441/b88ff5796b906b2ef532e180940e8ab2_400x400.jpeg'
    }, {
      username: 'John',
      email: 'john@john.com',
      password: 'john',
      passwordConfirmation: 'john',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRobdCrqMpmlV1t5m6H161cIKZvIHkiGxiYhHyg-ZSFLgXaPl'
    }, {
      username: 'Rich',
      email: 'rich@rich.com',
      password: 'rich',
      passwordConfirmation: 'rich',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DlU2n-AMKbMxpzTQ3ZNEnFgfR7DhX2itzC2ggutIFVFom55nGA'
    }]))
    .then(users => Item.create([{
      category: 'Clothes',
      gender: 'Female',
      itemCategory: 'Dress',
      itemDescription: 'Balenciaga graphic print dress',
      designerName: 'BALENCIAGA',
      size: 'S',
      price: 195,
      rrp: 680,
      condition: 'Very good',
      material: 'Wool/Cotton Mix',
      colour: 'Multi-Coloured/Stripes',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'BLACK WITH VIBRANT PRINT, PULLED AT WAIST, V NECKLINE ZIPS AT BACK, HALF LINED',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144795_1.jpg?c=1528467935',
      user: users[0]
    }, {
      category: 'Clothes',
      gender: 'Female',
      itemCategory: 'Dress',
      itemDescription: 'DOLCE & GABBANA Floral Print Dress',
      designerName: 'DOLCE & GABBANA',
      size: 'S',
      price: 309,
      rrp: 755,
      condition: 'Very good',
      material: 'Silk',
      colour: 'Multi-Coloured/Stripes',
      shipping: 'Hermes £2.79',
      salePitch: 'Bottega Veneta brick red fit & flare dress with capped sleeves, round neckline and side zipper closure. Pleated at back for fit with a textured hem.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144040_1.jpg?c=1527840269',
      user: users[1]
    }, {
      category: 'Clothes',
      gender: 'Female',
      itemCategory: 'Dress',
      itemDescription: 'Bottega Veneta Red fit & flare Dress',
      designerName: 'BOTTEGA VENETA',
      size: 'M',
      price: 120,
      rrp: 1225,
      condition: 'Very good',
      material: '100% Wool',
      colour: 'Red',
      shipping: 'Royal Mail Standard 2nd Class £2.95',
      salePitch: 'Good condition with a small faded mark below the waist on the right side. This can be seen with the zoom in in picture 2. The mark is hard to see due to the colour of the fabric. 8.5/10.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/119/picture/119820_1.jpg?c=1529852233',
      user: users[3]
    }, {
      category: 'Clothes',
      gender: 'Female',
      itemCategory: 'Dress',
      itemDescription: 'Ralph Lauren red dress',
      designerName: 'RALPH LAUREN',
      size: 'M',
      price: 500,
      rrp: 2000,
      condition: 'New with tags',
      material: 'Silk Stretch Knit',
      colour: 'Red',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'beautiful dress, stretches to fit to give a great silhouette. Side zip to give snug fit for a flirty summer dress.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/137/picture/137532_1.jpg?c=1527010690',
      user: users[2]
    }, {
      category: 'Bags',
      gender: 'Female',
      itemCategory: 'Ladies Shoulder Bags',
      itemDescription: 'Chanel bag',
      designerName: 'Chanel',
      size: 'S',
      price: 2499,
      rrp: 3500,
      condition: 'Satisfactory',
      material: 'Lambskin Leather',
      colour: 'Black',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'This CHANEL Maxi Jumbo XL Flap Bag is in Very Good Pre-Owned Condition accompanied by Chanel Dust Bag, Box, Authenticity Card, Care Booklet. Circa 1997. Primarily made from Lambskin Leather complimented by Gold hardware.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/131/picture/131050_1.jpg?c=1516270097',
      user: users[2]
    }, {
      category: 'Bags',
      gender: 'Female',
      itemCategory: 'Jimmy Choo Rosalie Bag',
      itemDescription: 'Shoulder bag',
      designerName: 'Jimmy Choo',
      size: 'M',
      price: 330,
      rrp: 545,
      condition: 'New with tags',
      material: 'Leather',
      colour: 'Pink',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'Please note, these items are pre-owned and may show some signs of storage, even when unworn and unused. This is reflected within the significantly reduced price. Please refer to images and use the zoom function for more detail.',
      image: 'https://www.hardlyeverwornit.com/original_images/picture/148/148453_1.jpg?c=1531833975',
      user: users[1]
    }, {
      category: 'Bags',
      gender: 'Female',
      itemCategory: 'Dior Pink and White floral Saddle Bag',
      itemDescription: 'Shoulder bag',
      designerName: 'Dior',
      size: 'S',
      price: 299,
      rrp: 400,
      condition: 'Good',
      material: 'Canvas/ Leather',
      colour: 'Pink',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'Conditions Details : See the photographs pen leak but outside still in good condition reflected in price',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144363_1.jpg?c=1531730072',
      user: users[0]
    }, {
      category: 'Shoes',
      gender: 'Male',
      itemCategory: 'Alexander Mcqueen Grey Suede Boots',
      itemDescription: 'Men Boots',
      designerName: 'Alexander Mcqueen',
      size: 'L',
      price: 285,
      rrp: 565,
      condition: 'Very good',
      material: 'Suede',
      colour: 'Grey',
      shipping: 'Royal Mail Signed 2nd Class £3.95',
      salePitch: 'The boots are laced up, with a contrasting light grey sole. The shoes have hardly ever been worn however there are small scratches on the back of the shoes.',
      image: 'https://d38r3tbvwkical.cloudfront.net/images/134/picture/134086_1.jpg?c=1531392690',
      user: users[0]
    }]))
    .then(items => console.log(`${items.length} items created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
