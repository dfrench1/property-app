const express = require('express');
let router = express.Router();

router.use(require('./GetViewings'));
router.use(require('./CreateViewing'));
router.use(require('./DeleteViewing'));

module.exports = router;