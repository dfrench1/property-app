const express = require('express');
let router = express.Router();

router.use(require('./GetProperties'));
router.use(require('./SingleProperty'));
router.use(require('./EditProperty'));
router.use(require('./DeleteProperty'));
router.use(require('./DeletePropertyImage'));
router.use(require('./AddProperty'));
router.use(require('./AddPropertyImage'));

module.exports = router;