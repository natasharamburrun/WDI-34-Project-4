const Item = require('../models/item');

function indexRoute(req, res, next) {
  Item.find()
    .then(items => res.json(items))
    .catch(next);
}
function showRoute(req, res, next) {
  Item.findById(req.params.id)
    .populate('user')
    .then(item => res.json(item))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.user = req.currentUser;
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

function deleteRoute(req, res, next) {
  Item.findById(req.params.id)
    .then(item => item.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

function commentCreateRoute(req, res, next) {
  req.body.author = req.currentUser;
  Item.findById(req.params.id)
    .populate('comments.author')
    .then(boat => {
      boat.comments.push(req.body);
      return boat.save();
    })
    .then(boat => res.json(boat))
    .catch(next);
}

function commentDeleteRoute(req, res, next) {
  Item.findById(req.params.id)
    .then(boat => {
      const comment = boat.comments.id(req.params.commentId);
      comment.remove();
      return boat.save();
    })
    .then(boat => res.json(boat))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
};
