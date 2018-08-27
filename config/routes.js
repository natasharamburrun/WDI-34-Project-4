const router = require('express').Router();
const items = require('../controllers/items');
const auth = require('../controllers/auth');
const payment = require('../controllers/payment');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');
const orders = require('../controllers/orders');

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/user')
  .get(secureRoute, users.showUserRoute);

//router for the items page
router.route('/items')
  .get(items.index)
  .post(secureRoute, items.create);

router.route('/items/:id/')
  .get(items.show)
  .put(secureRoute, items.update)
  .delete(secureRoute, items.delete);

//create comments on the items show page
router.post('/items/:id/comments', items.commentCreate);
router.delete('/items/:id/comments/:commentId', items.commentDelete);


router.post('/register', auth.register);
router.post('/login', auth.login);

//router for payment charges
router.post('/charge', payment.create);




//router to show orders
router.route('/orders')
  .get(orders.orderIndex);
router.route('/orders/:id')
  .get(orders.orderShow);


module.exports = router;
