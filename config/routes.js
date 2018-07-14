const router = require('express').Router();
const items = require('../controllers/items');
const auth = require('../controllers/auth');
const payment = require('../controllers/payment');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/items')
  .get(items.index)
  .post(secureRoute, items.create);

router.route('/items/:id/')
  .get(items.show)
  .put(secureRoute, items.update)
  .delete(secureRoute, items.delete);

router.post('/items/:id/comments', items.commentCreate);
router.delete('/items/:id/comments/:commentsId', items.commentDelete);


router.post('/register', auth.register);
router.post('/login', auth.login);

router.post('/charge', payment.create);


module.exports = router;
