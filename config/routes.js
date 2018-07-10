const router = require('express').Router();
const items = require('../controllers/items');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/items')
  .get(items.index)
  .post(secureRoute, items.create);

router.route('/items/:id/')
  .get(items.show)
  .put(secureRoute, items.update)
  .delete(secureRoute, items.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
