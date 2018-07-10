const router = require('express').Router();
const items = require('../controllers/items');

router.route('/items')
  .get(items.index);
  
module.exports = router;
