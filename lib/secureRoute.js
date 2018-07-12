const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Promise = require('bluebird');
const { secret } = require('../config/environment');

function secureRoute(req, res, next) {

  if(!req.headers.authorization) return res.status(401).json({ message: 'No token sent' });

  const token = req.headers.authorization.replace('Bearer ', '');
  //getting token from the header in authorization

  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if(err) reject(err);
      resolve(payload);
    });
  })
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if(!user) return res.status(401).json({ message: 'User not found' });
      req.currentUser = user;
      //use in controller to identify the user/created by/owner
      next();
    })
    .catch(() => res.status(401).json({ message: 'Token invalid' }));

}

module.exports = secureRoute;
