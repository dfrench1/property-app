const express = require('express');
const Property = require('../../models/Property')
let router = express.Router();

router.get('/properties', async (req, res) => {
    try {
      const properties = await Property.find({})
      res.json(properties)
    } catch (err) {
      res.json(err)
    }
})

module.exports = router;