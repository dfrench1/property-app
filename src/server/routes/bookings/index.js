const express = require('express');
let router = express.Router();

router.use(require('./GetBooking'));
router.use(require('./CreateBooking'));
router.use(require('./DeleteBooking'));

module.exports = router;