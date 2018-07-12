const router = require('express').Router();
const items = require('../controllers/items');
const auth = require('../controllers/auth');
const payment = require('../controllers/payment');
const user = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');


router.route('/user/:id')
  .get(user.show)
  .put(secureRoute, user.update)
  .delete(secureRoute, user.delete);

router.route('/items')
  .get(items.index)
  .post(secureRoute, items.create);

router.route('/items/:id/')
  .get(items.show)
  .put(secureRoute, items.update)
  .delete(secureRoute, items.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.post('/charge', payment.create);


module.exports = router;
