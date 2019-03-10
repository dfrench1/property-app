const express = require('express');
const Property = require('../models/Property')
let router = express.Router();

router.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find({})
    res.json(properties)
  } catch (err) {
    throw err
  }
})

router.get('/properties/:id', async (req, res) => {
  console.log('qqqq', req.query)
  const {id} = req.query
  try {
    const property = await Property.findById({
      '_id': id
    })
    res.json(property)
  } catch (err) {
    throw err
  }
})

module.exports = router;