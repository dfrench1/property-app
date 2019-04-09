const express = require('express');
const Property = require('../../models/Property')
let router = express.Router();

router.get('/properties/:id', async (req, res) => {
    const {id} = req.query
    try {
      const property = await Property.findById({
        '_id': id
      })
      res.json(property)
    } catch (err) {
      res.send(err)
    }
  })

  module.exports = router;