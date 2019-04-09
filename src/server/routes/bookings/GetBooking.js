const express = require('express');
const Bookings = require('../../models/Booking')
let router = express.Router();

router.post('/bookings', async (req, res) => {
  const {user} = req.body
    try {
      const bookings = await Bookings.find({user: user.id})
      .populate('event', ['title', 'description', 'date'])
      .populate('user', ['name', 'email'])
      .populate('property')
      res.json(bookings)
    } catch (err) {
      res.json({error: err})
    }
  })

  module.exports = router;