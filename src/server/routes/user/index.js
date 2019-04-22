const express = require('express');
let router = express.Router();

router.use(require('./Login'));
router.use(require('./Register'));
router.use(require('./Favourites'));
router.use(require('./Reset'));
router.use(require('./GetNewPassword'));
router.use(require('./PostNewPassword'));


module.exports = router;