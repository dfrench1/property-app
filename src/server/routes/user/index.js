const express = require('express');
let router = express.Router();

router.use(require('./Login'));
router.use(require('./Register'));
router.use(require('./Favourites'));

module.exports = router;