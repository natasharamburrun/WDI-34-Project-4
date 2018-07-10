const router = require('express').Router();
const items = require('../controllers/items');

router.route('/items')
  .get(items.index)
  .post(items.create);

router.route('/items/:id/')
  .get(items.show)
  .put(items.update)
  .delete(items.delete);

module.exports = router;
