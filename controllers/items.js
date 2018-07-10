const Item = require('../models/item');

function indexRoute(req, res, next) {
  Item.find()
    .then(items => res.json(items))
    .catch(next);
}
function showRoute(req, res, next) {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(next);
}

function createRoute(req, res, next) {
  Item.create(req.body)
    .then(item => res.status(201).json(item))
    .catch(next);
}

function updateRoute(req, res, next) {
  Item.findById(req.params.id)
    .then(item => item.set(req.body))
    .then(item => item.save())
    .then(item => res.json(item))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute
};
