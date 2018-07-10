const router = require('express').Router();
const items = require('../controllers/items');
const auth = require('../controllers/auth');

router.route('/items')
  .get(items.index)
  .post(items.create);

router.route('/items/:id/')
  .get(items.show)
  .put(items.update)
  .delete(items.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
