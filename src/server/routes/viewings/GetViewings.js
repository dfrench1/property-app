const express = require('express');
const Viewings = require('../../models/Viewings')
const User = require('../../models/Users')
let router = express.Router();

router.get('/api/viewings', async (req, res) => {
    try {
      const viewings = await Viewings.find({})
      .populate('property')
      res.json(viewings)
    } catch (err) {
      res.json({error: err})
    }
  })

  module.exports = router;